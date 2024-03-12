let arr = [
    {names:"drinks to heaven", image:"https://plus.unsplash.com/premium_photo-1675949335489-f778abf84197?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {names:"apple is good", image:"https://images.unsplash.com/photo-1648911704152-bb30997455c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"},
    {names:"Adrink is healthy", image:"https://images.unsplash.com/photo-1558645836-e44122a743ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {names:"ashu", image:"https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"},
    {names:"building", image:"https://images.unsplash.com/photo-1709934645859-f1ed8d3a4954?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {names:"building are bad", image:"https://images.unsplash.com/photo-1709934645729-930775e62aee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"},
    {names:"train were easy", image:"https://plus.unsplash.com/premium_photo-1674129546223-d477baf52c5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},
    {names:"train to heaven", image:"https://images.unsplash.com/photo-1550527469-dec7456a2b2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"},
    {names:"train to busan", image:"https://plus.unsplash.com/premium_photo-1676745449942-9810b9f9e5b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8"},
    {names:"train to raigar", image:"https://images.unsplash.com/photo-1610016324464-03a8942a387e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"},
    {names:"train why", image:"https://images.unsplash.com/photo-1610016324464-03a8942a387e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"},


    {names:"subway", image:"https://plus.unsplash.com/premium_photo-1676745449942-9810b9f9e5b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8"},


    {names:"subway", image:"https://images.unsplash.com/photo-1623410877119-a0b5cf01e518?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"},


    {names:"subway", image:"https://images.unsplash.com/photo-1622101786750-c9140cdae1d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"},

    {names:"subway", image:"https://plus.unsplash.com/premium_photo-1677542574828-bd6e28fd83c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"},

    {names:"drinks", image:"https://plus.unsplash.com/premium_photo-1675949335489-f778abf84197?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {names:"apple", image:"https://images.unsplash.com/photo-1648911704152-bb30997455c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"},
    {names:"adrink", image:"https://images.unsplash.com/photo-1558645836-e44122a743ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {names:"ashu", image:"https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"},
    {names:"building", image:"https://images.unsplash.com/photo-1709934645859-f1ed8d3a4954?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {names:"building", image:"https://images.unsplash.com/photo-1709934645729-930775e62aee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"},
    {names:"train", image:"https://plus.unsplash.com/premium_photo-1674129546223-d477baf52c5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},
    {names:"train", image:"https://images.unsplash.com/photo-1550527469-dec7456a2b2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"},
    {names:"train", image:"https://plus.unsplash.com/premium_photo-1676745449942-9810b9f9e5b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8"},
    {names:"train", image:"https://images.unsplash.com/photo-1610016324464-03a8942a387e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"},
    {names:"train", image:"https://images.unsplash.com/photo-1610016324464-03a8942a387e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"},


    {names:"subway", image:"https://plus.unsplash.com/premium_photo-1676745449942-9810b9f9e5b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8"},


    {names:"subway", image:"https://images.unsplash.com/photo-1623410877119-a0b5cf01e518?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"},


    {names:"subway", image:"https://images.unsplash.com/photo-1622101786750-c9140cdae1d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"},

    {names:"subway", image:"https://plus.unsplash.com/premium_photo-1677542574828-bd6e28fd83c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"},

    

];





function showimages(){
    clutter = '';
    arr.forEach(function(obj){
        clutter += `<div class="box">
                 <img class="cursor-pointer" src="${obj.image}" alt="image">
                 <div class="caption">Lorem ipsum </div>
             </div>`;
    })

    // console.log(clutter);
    document.querySelector(".container")
    .innerHTML = clutter
}


function inputsearch(){

    let input = document.querySelector("#searchinput");


    input.addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block";
        console.log("hey");
    })

    input.addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none";
    })

    input.addEventListener("input", function(){
        const filter = arr.filter(obj => obj.names.startsWith(input.value.toLowerCase()));
        // console.log(filter); 
        
        var clutter = '';

        arr.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.names}</h3>
        </div>`
        })
        document.querySelector(".searchdata").style.display = "block"
        document.querySelector(".searchdata").innerHTML = clutter;
    })

    
}
inputsearch();

showimages();

