//const staffList = [];

let staffMembers = [{id: 1, role: "Engineer", name: "Ifeco", countDays: 1},
{id: 2, role: "Director", name: "Kingsley", countDays: 0},
{id: 3, role: "Manager", name: "James", countDays: 0},
{id: 4, role: "Cashier", name: "Cynthia", countDays: 0},
{id: 5, role: "Customer Care Rep.", name: "Henry", countDays: 0},
{id: 6, role: "Data Entry Rep", name: "Chioma", countDays: 0}
]

function boardMembers(){
    let newStaff = document.getElementById("staffId").value;
    let date = document.getElementById("staffDate").value;
    for(let p=0; p < staffMembers.length; p++){
        if(newStaff == staffMembers[p].id){
            let newStaffData = {
                id:newStaff,
                name:staffMembers[p].name,
                role:staffMembers[p].role,
                countDays:staffMembers[p].countDays + 1,
                date:date
            }
            
            staffMembers.push(newStaffData)
            console.log(staffMembers[p])  
            return;

        }
        
        }
}
    
