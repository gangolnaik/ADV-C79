
	menu_list_array = ["Chicken Tandoori Pizza","Veg Supreme Burger","Paneer Tikka Pizza","Chicken Chilli Pizza","Cheese Burst Pizza"];
    
    function getmenu(){
        var htmldata;
        htmldata="<ol class='menulist'>"
        menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            //document.getElementById('display_menu').innerHTML ='<li>' + menu_list_array[i] + '</li>'
            htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
        //    document.getElementById("display_menu").innerHTML = menu_list_array[i];
        }
         htmldata=htmldata+"</ol>"
         document.getElementById("display_menu").innerHTML = htmldata;
    }
    function add_item(){
        var item=document.getElementById("add_item").value;
        menu_list_array.push(item);
        menu_list_array.sort();
        // console.log(menu_list_array);

        // document.getElementById("add_item").style.display = "";
        //document.getElementById("display_addedmenu").innerHTML = menu_list_array;
       // document.getElementById("sortbtn").style.display = "inline-block";

        // htmldata="<ol class='menulist'>"
        // menu_list_array.sort();
        // for(var i=0;i<menu_list_array.length;i++){
        //     //document.getElementById('display_menu').innerHTML ='<li>' + menu_list_array[i] + '</li>'
        //     htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
        // //    document.getElementById("display_menu").innerHTML = menu_list_array[i];
        // }
        //  htmldata=htmldata+"</ol>"
        //   document.getElementById("display_addedmenu").innerHTML = htmldata;

        htmldata="<div class='pizzacard'">
        menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            //document.getElementById('display_menu').innerHTML ='<li>' + menu_list_array[i] + '</li>'
            <img>
            <p>
            
            htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
        //    document.getElementById("display_menu").innerHTML = menu_list_array[i];
        }
         htmldata=htmldata+"</div>"
          document.getElementById("display_addedmenu").innerHTML = htmldata;
    }

function sorting()
{
	menu_list_array.sort();
    document.getElementById("display_sortedmenu").innerHTML = menu_list_array;
}
