const itemAmounts = [];

document.querySelector("#add-row").addEventListener("click", () => {
    //calls the addRow() method on clicking the button
    addRow();
    calcTotal();
    ClearFields();
    });

    const addRow = () => {
        //creates a new row element
        let row = document.createElement("tr");
        
        //creates a new column element
        let column1 = document.createElement("td");

        
        const itemVal = document.getElementById('item').value;
        const amtVal = document.getElementById('amount').value;

        const amount = Number(amtVal)

        console.log(typeof amount);
        if(isNaN(amount)){
            alert("pls type in a Number")
        }else{
            itemAmounts.push(amount)
        }
        
        //create value for the column element
        const column1text = document.createTextNode(itemVal);
        
        //appends the value to the column element
        column1.appendChild(column1text);
        let column2 = document.createElement("td");
        const column2text = document.createTextNode(amtVal);
        column2.appendChild(column2text);
        
        //appends the first column to the new row
        row.appendChild(column1);
        
        //appends the second column to the new row
        row.appendChild(column2);
        
        //appends the row to the table
        document.querySelector("#main-table").appendChild(row);

        };

    const ClearFields = () => {
            document.getElementById("item").value = "";
            document.getElementById("amount").value = "";
       }

    const calcTotal = () => {

    // Getting sum of numbers
        const sum = itemAmounts.reduce(function(a, b){
        return a + b;
        }, 0);
        document.getElementById('total').innerHTML = sum;

    }