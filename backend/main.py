from fastapi import FastAPI,HTTPException
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

projects ={
    1:{
        "product_name":"demo",
        "ingredient":"demo",
        "weight":100.0,
        "tone":"demo"
    }
}

class projectdetails(BaseModel):
    product_name:str
    ingredient: str
    weight: float
    tone: str

class projectupdate(BaseModel):
    product_name: Optional[str] = None
    ingredient: Optional[str] = None
    weight: Optional[float] = None
    tone: Optional[str] = None

# Auto ID generator function
def get_next_project_id():
    return max(projects.keys()) + 1 if projects else 1

#first endpoint to get all projects
@app.get("/project")
def get_project():
    return projects

#second endpoint to get project by id
@app.get("/project/{project_id}")
def get_project_by_id(project_id : int):
    if project_id not in projects:
        raise HTTPException (status_code = 404, detail = "Project not found")
    return projects[project_id]

#third endpoint to get project by filter
@app.get("/projects/filter")
def filter_projects(
    product_name: Optional[str] = None,
    ingredient: Optional[str] = None,
    weight: Optional[float] = None,
    tone: Optional[str] = None
):
    filtered_results = {}

    for project_id, data in projects.items():
        if product_name and product_name.lower() not in data["product_name"].lower():
            continue
            
        if ingredient and ingredient.lower() not in data["ingredient"].lower():
            continue
            
        if weight is not None and abs(data["weight"] - weight) > 0.01:
            continue
            
        if tone and tone.lower() != data["tone"].lower():
            continue

        filtered_results[project_id] = data

    return filtered_results

#fourth endpoint to create new project
@app.post("/new_project/")
def new_project(project:projectdetails):
    project_id = get_next_project_id()
    projects[project_id] = project.model_dump()
    return {"message": "Project created successfully" , "project_id": project_id, "Project_Details": projects[project_id]}

#fifth endpoint to update whole project
@app.put("/update_project/{project_id}")
def update_project(project_id:int, project:projectdetails):
    if project_id not in projects:
        raise HTTPException(status_code=404 , detail="Project not found")
    projects[project_id] = project
    return {"message": "Project updated successfully" , "project": projects[project_id]}

#sixth endpoint to update project partially
@app.patch("/update_project/{project_id}")
def update_project_partially(project_id:int, project:projectupdate):
    if project_id not in projects:
        raise HTTPException(status_code=404 , detail="Project not found")
    clean_data = project.model_dump(exclude_unset=True)
    projects[project_id].update(clean_data)
    return {"message": "Updated!", "data": projects[project_id]}

#seventh endpoint to delete project
@app.delete("/delete/{project_id}")
def delete_project(project_id:int):
    if project_id not in projects:
        raise HTTPException(status_code=404 , detail="Project not found")
    del projects[project_id]
    return {"message": "Project deleted successfully"}