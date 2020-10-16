

 
(function UData()
{
	var userDATA= document.getElementById("userData");
	userDATA.innerHTML= "<h3>" + "Omisha Shrivastava" + "</h3>" + "<h4>" + "omisha2309@gmail.com" + "</h4>"
						 + "<p>" + "UI Developer" + "</p>"  + "<p>" + "Pune,Inida" + "</p>"  + "<p>" + "http://twitter.com/Omisha" + "</p>";
})(); 

let url= "https://api.github.com/search/repositories?q=javascript&sort=stars&order=desc";

let dataAll,
   dataToBeDisplayed = [];


       $.ajax({
    	method: "Get",
    	cache: false,
    	url: url,
    	success: function(data)
    	{
    		dataAll = data.items;
    		//console.log(dataAll);
    		let test = "<ul>";
    		for(let i=0;i<dataAll.length;i++)
    		{

    		{  test+= "<li>" + "<div>" + " <img src= "  + dataAll[i].owner.avatar_url + "/> " + "</div>" 
    		+ "<h1>" + dataAll[i].name +"</h1>" + "<p>" + dataAll[i].description + "</p>" + "</li>";    	
    		}

			}

			test+= "</ul>";

    		dataToBeDisplayed.push(test); 

    		$(".subContent").html(dataToBeDisplayed);
    		

    		

    	//$("#grid_items").html(dataToBeDisplayed);
    },

    error:function(error)
    {
    	console.log(error)
    },
    });
   
    

    //var x = document.createElement("INPUT");
 			   // x.setAttribute("type", "text");
 			  //  x.setAttribute("value", dataAll[i].id);
 			  //  (dataAll).appendChild(x);
    			//$("#grid_items").innerText= "hello";




    		//	(function UData() {
    			     //  var node = document.getElementById("userData");
    			     //  node.innerHTML = "<h3>" + "GIT HUB" + "</h3>" + 
    			     //  "<h4>" + "Omisha Shrivastava" + "</h4>"
    			      //  +"<h5>"+ "omisha2309" + "</h5>" 
    			      // + "<p>" + "UI Developer" + "</p>" + "<p>" + "Pune,India" + "</p>" ;
    			 //  })();
