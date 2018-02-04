function allLoad(){
    morroLoad();
    pismoLoad();
    cayucosLoad();
    studiodriveLoad();
    willowcreekLoad();
    

}

function allSum(){
    pismoSum();
    morroSum();
}
function pismoLoad (){
$.ajax({ url:"http://api.spitcast.com/api/spot/forecast/162/",
        success: function(result){
            console.log(result);
            var dataVals = result;
            createTable(result);
            
            return dataVals;
        }})

    
 console.log("hiP")
}
function cayucosLoad (){
$.ajax({ url:"http://api.spitcast.com/api/spot/forecast/164/",
        success: function(result){
            console.log(result);
            var dataVals = result;
            createTable(result);
            
            return dataVals;
        }})

    
 console.log("hiP")
}

function morroLoad (){
$.ajax({ url:"http://api.spitcast.com/api/spot/forecast/163/",
        success: function(result){
            console.log(result);
            var dataVals = result;
            createTable(result);
            
            return dataVals;
        }})

    
 console.log("hiM")
}
function studiodriveLoad(){
$.ajax({ url:"http://api.spitcast.com/api/spot/forecast/599/",
        success: function(result){
            console.log(result);
            var dataVals = result;
            createTable(result);
            
            return dataVals;
        }})
}

function willowcreekLoad(){
$.ajax({ url:"http://api.spitcast.com/api/spot/forecast/151/",
        success: function(result){
            console.log(result);
            var dataVals = result;
            createTable(result);
            
            return dataVals;
        }})
}
function createTable(result){
    var myDataArray    = new Array();
    for (var i=0; i<15; i++){
        myArrayTemp = new Array();
        console.log(result[i+5].size_ft);
        myArrayTemp[0] = result[i+5].shape_detail.swell;
        myArrayTemp[1] = result[i+5].shape_detail.tide;
        myArrayTemp[2] = result[i+5].shape_detail.wind;
        myArrayTemp[3] = result[i+5].size_ft;
        myArrayTemp[3] = myArrayTemp[3].toFixed(2);
        myArrayTemp[3] = myArrayTemp[3].toString();
        console.log(myArrayTemp[3])
        myDataArray[i] = myArrayTemp;
        
    }
    var myArray = new Array();
    myArray[0] = "5 AM";
    myArray[1] = "6 AM";
    myArray[2] = "7 AM";
    myArray[3] = "8 AM";
    myArray[4] = "9 AM";
    myArray[5] = "10 AM";
    myArray[6] = "11 AM";
    myArray[7] = "12 PM";
    myArray[8] = "1 PM";
    myArray[9] = "2 PM";
    myArray[10] = "3 PM";
    myArray[11] = "4 PM";
    myArray[12] = "5 PM";
    myArray[13] = "6 PM";
    myArray[14] = "7 PM";

    var myTable= "<table><tr><td style='width: 100px; color: black;'>Time</td>";
    myTable+= "<td style='width: 100px; color: black; text-align: right;'>Swell</td>";
    myTable+="<td style='width: 100px; color: black; text-align: right;'>Tide</td>";
        myTable+="<td style='width: 100px; color: black; text-align: right;'>Wind</td>";
    myTable+="<td style='width: 200px; color: black; text-align: right;'>Wave Size(Feet)</td></tr>";

    myTable+="<tr><td style='width: 100px;                   '>---------------</td>";
    myTable+="<td     style='width: 100px; text-align: right;'>---------------</td>";
     myTable+="<td     style='width: 100px; text-align: right;'>---------------</td>";
         myTable+="<td     style='width: 100px; text-align: right;'>---------------</td>";
    myTable+="<td     style='width: 200px; text-align: right;'>------------------------------</td></tr>";
    console.log(myDataArray);

  for (var i=0; i<15; i++) {
      var color = "red";
      if(result[i].warnings.length == 0){
          color = "black;"
      }
        myTable+="<tr><td style='width: 100px;  color:" + color + "; text-align: right'>"+ myArray[i] + "</td>";
        myTable+="<td style='width: 100px; color:" + color + "; text-align: right;'>" + myDataArray[i][0] + "</td>";
        myTable+="<td style='width: 100px; color:" + color + "; text-align: right;'>" + myDataArray[i][1] + "</td>";
        myTable+="<td style='width: 100px; color:" + color + "; text-align: right;'>" + myDataArray[i][2] + "</td>";
        myTable+="<td style='width: 200px; color:" + color + "; text-align: right;'>" + myDataArray[i][3] + "</td></tr>";
  }  
   myTable+="</table>";
    var beachName = result[0].spot_name;
    console.log(beachName);
    switch(beachName){
        case "Morro Rock":
            document.getElementById('tablePrintP').innerHTML = myTable;
            break;
        case "Pismo Beach Pier":
            document.getElementById('tablePrintM').innerHTML = myTable;
            break;
        case "Cayucos Pier":
            document.getElementById('tablePrintC').innerHTML = myTable;
            break;
        case "Studio Drive":
            document.getElementById('tablePrintSD').innerHTML = myTable;
            break;
        case "Willow Creek":
            document.getElementById('tablePrintWC').innerHTML = myTable;
            break;
            
    }

}
function pismoSum (){
$.ajax({ url:"http://api.spitcast.com/api/spot/forecast/162/",
        success: function(result){
            var dataVals = result;
            beachSum(result);
            
            return dataVals;
        }})

    
 console.log("hiP")
}
function morroSum (){
$.ajax({ url:"http://api.spitcast.com/api/spot/forecast/163/",
        success: function(result){
            console.log(result);
            var dataVals = result;
            beachSum(result);
            
            return dataVals;
        }})

    
 console.log("hiP")
}

function beachSum(result){
        var myDataArray    = new Array();
    for (var i=0; i<15; i++){
        myArrayTemp = new Array();
        console.log(result[i+5].size_ft);
        myArrayTemp[0] = result[i+5].shape_detail.swell;
        myArrayTemp[1] = result[i+5].shape_detail.tide;
        myArrayTemp[2] = result[i+5].shape_detail.wind;
        myDataArray[i] = myArrayTemp;
        
    }
    var sum =0;
    for (var i=0; i<myDataArray.length; i++){ 
        for (var j=0; j<3; j++){
            
            switch(myDataArray[i][j]){
                case "Poor":
                sum += 1;
                break;
                case "Poor-Fair":
                sum += 2;
                break;
                case "Fair":
                sum += 3;
                break;
                case "Fair-Good":
                sum += 4;
                break;
                case "Good":
                sum += 5;
                break;
        }
        }
    }
    var color = "black";
    var message = "";
    if (sum <=81){
        color = "red";
        message = "Poor";
    }
    else if (sum <=117){
        color = "orange";
        message = "Poor-Fair";
    }
    else if (sum <=153){
        color = "gold";
        message = "Fair";
    }
    else if (sum <=189){
        color = "LimeGreen";
        message = "Fair-Good";
    }
    else{
        color = "ForestGreen";
        message = "Good";
    }

    switch(result[0].spot_name){
    
    case "Pismo Beach Pier":
                console.log(color);
    document.getElementById("sumP").style.color = color;
    document.getElementById('sumP').innerHTML = message;
    break;
     case "Morro Rock":
    document.getElementById("sumM").style.color = color;
    document.getElementById('sumM').innerHTML = message;
    break;
    
}

}