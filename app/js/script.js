window.onload = function() {

    const menuBtn = document.querySelector('.menu-btn');
    const navItems = document.querySelector('.nav-items');


    //for ham-menu button in mobile
    menuBtn.addEventListener('click',() => {
        menuBtn.classList.toggle('open');
        navItems.classList.toggle('open');
    } );


    //FOR IMG READER probably gonna need to figure out another way:server-side what?

    var totalPageCount = 3; // total number of pages available (learn how to count # of imgs in a file?)

    var pages = []; //array of available pages to cycle through

    for( let i = 0; i < totalPageCount; i++) { //creating array with all pages in order, require consistent naming in file
        item = 'comic-images/page' + i + '.png';
        pages.push(item);
    } 

    var counter = document.getElementById('pageNumber').innerHTML - 1; // counter for which page currently displaying

    document.getElementById('currentPage').onclick = function() { // goes to next page if page image clicked
        if (counter < (pages.length - 1)) { // if its the last page, you cannot go forward
            counter += 1;//go forward a page
            document.getElementById('currentPage').src = pages[counter]; 
            document.getElementById('pageNumber').innerHTML = counter + 1;//change pg #
        }
    }

    document.getElementById('forward-btn').onclick = function () {  //when forward button is clicked
        if (counter < (pages.length - 1)) { // if its the last page, you cannot go forward
            counter += 1;//go forward a page
            document.getElementById('currentPage').src = pages[counter]; 
            document.getElementById('pageNumber').innerHTML = counter + 1;//change pg #
        }
    }

    document.getElementById('backward-btn').onclick = function () {  //when backward button is clicked
        if (counter > 0){ //if its the first page, you cannot go back
            counter -= 1; //go back a page
            document.getElementById('currentPage').src = pages[counter];
            document.getElementById('pageNumber').innerHTML = counter + 1;//change pg #
        }
    }

    document.getElementById("firstpg-btn").onclick = function() { // when first page button clicked
        counter = 0;
        document.getElementById('currentPage').src = pages[counter]; 
        document.getElementById('pageNumber').innerHTML = counter + 1;//change pg #
    }

    document.getElementById("lastpg-btn").onclick = function() { // when last page button clicked
        showLastPg()

    }

    function showLastPg (){
        counter = pages.length - 1;
        document.getElementById('currentPage').src = pages[counter]; 
        document.getElementById('pageNumber').innerHTML = counter + 1;//change pg #
    }

}
