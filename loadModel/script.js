// script.js

let artifacts = [];
let currentEditIndex = -1;

function renderTable() {
  const tableBody = document.querySelector("#artifactTable tbody");
  tableBody.innerHTML = "";

  artifacts.forEach((artifact, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${artifact.id}</td>
            <td>${artifact.name}</td>
            <td>${artifact.name_en}</td>
            <td><img src="${artifact.image}" alt="${artifact.name}" style="width: 50px; height: 50px;"></td>
            <td>
                <button onclick="editArtifact(${index})">Edit</button>
                <button onclick="deleteArtifact(${index})">Delete</button>
            </td>
        `;

    tableBody.appendChild(row);
  });
}

function addArtifact() {
  const name = document.getElementById("name").value;
  const name_en = document.getElementById("name_en").value;
  const image = document.getElementById("image").value;

  if (!name || !name_en || !image) {
    alert("Please fill all fields!");
    return;
  }

  const newArtifact = {
    id: artifacts.length + 1,
    name,
    name_en,
    image,
  };

  artifacts.push(newArtifact);
  renderTable();
  clearForm();
}

function editArtifact(index) {
  currentEditIndex = index;
  const artifact = artifacts[index];

  document.getElementById("name").value = artifact.name;
  document.getElementById("name_en").value = artifact.name_en;
  document.getElementById("image").value = artifact.image;
}

function updateArtifact() {
  if (currentEditIndex === -1) {
    alert("No artifact selected for editing!");
    return;
  }

  const name = document.getElementById("name").value;
  const name_en = document.getElementById("name_en").value;
  const image = document.getElementById("image").value;

  artifacts[currentEditIndex].name = name;
  artifacts[currentEditIndex].name_en = name_en;
  artifacts[currentEditIndex].image = image;

  renderTable();
  clearForm();
  currentEditIndex = -1;
}

function deleteArtifact(index) {
  artifacts.splice(index, 1);
  renderTable();
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("name_en").value = "";
  document.getElementById("image").value = "";
}

function downloadJson() {
  const dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(artifacts));
  const downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", "artifacts.json");
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}
