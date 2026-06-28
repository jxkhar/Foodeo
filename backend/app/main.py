from fastapi import FastAPI, HTTPException, status
from typing import Optional
from app.schemas import ProjectDetails, ProjectUpdate
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Foodeo Backend API")

origins = [
    "*"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_headers=["*"],
    allow_methods=["*"]
)

projects = {
    1: {
        "product_name": "demo",
        "ingredient": "demo",
        "weight": 100.0,
        "tone": "demo"
    }
}

def get_next_project_id():
    return max(projects.keys()) + 1 if projects else 1

# 1. GET ALL PROJECTS
@app.get("/projects")
def get_all_projects():
    return projects

# 2. FILTER PROJECTS
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

# 3. GET SINGLE PROJECT BY ID
@app.get("/projects/{project_id}")
def get_project_by_id(project_id: int):
    if project_id not in projects:
        raise HTTPException(status_code=404, detail="Project not found")
    return projects[project_id]

# 4. CREATE NEW PROJECT
@app.post("/projects", status_code=status.HTTP_201_CREATED)
def create_new_project(project: ProjectDetails):
    project_id = get_next_project_id()
    projects[project_id] = project.model_dump()
    return {
        "message": "Project created successfully", 
        "project_id": project_id, 
        "Project_Details": projects[project_id]
    }

# 5. UPDATE WHOLE PROJECT (PUT)
@app.put("/projects/{project_id}")
def update_whole_project(project_id: int, project: ProjectDetails):
    if project_id not in projects:
        raise HTTPException(status_code=404, detail="Project not found")
    projects[project_id] = project.model_dump()
    return {"message": "Project updated successfully", "project": projects[project_id]}

# 6. UPDATE PROJECT PARTIALLY (PATCH)
@app.patch("/projects/{project_id}")
def update_project_partially(project_id: int, project: ProjectUpdate):
    if project_id not in projects:
        raise HTTPException(status_code=404, detail="Project not found")
    clean_data = project.model_dump(exclude_unset=True)
    projects[project_id].update(clean_data)
    return {"message": "Updated successfully!", "data": projects[project_id]}

# 7. DELETE PROJECT
@app.delete("/projects/{project_id}")
def delete_project(project_id: int):
    if project_id not in projects:
        raise HTTPException(status_code=404, detail="Project not found")
    del projects[project_id]
    return {"message": "Project deleted successfully"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="127.0.0.1", port=8000, reload=True)