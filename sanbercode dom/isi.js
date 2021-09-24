var items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'img/logitek.jpg'], 
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'img/msi.jpg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'img/genius.jpeg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'img/jerry.jpg']
    ] 
    
    var list = document.getElementById('listBarang')
    function printItems(array){
       var output=''
    for(var i = 0; i<array.length ; i++){
       output += `<div class ="col-4 mt-2"> 
                   <div class="card" style="width: 18rem;">
                        <img src="${array[i][4]}" class="card-img-top" height="200px" width="200px" alt="...">
                           <div class="card-body">
                               <h5 class="card-title" id="itemName">${array[i][1]}</h5>
                               <p class="card-text" id="itemDesc">${array[i][3]}</p>
                               <p class="card-text">${array[i][2]}</p>
                           <a href="#" class="btn btn-primary" id="addCart">Tambahkan ke keranjang</a>
                           </div>
                       </div>
                   </div>`
    }
    list.innerHTML = output
    }
    printItems(items)
    
    
    function filter(kataKunci){
       var filteredItems = []
       for(var a = 0; a< items.length; a++){
           var item = items[a]
           var namaitem = item[1]
           var ismatch = namaitem.toLowerCase().includes(kataKunci.toLowerCase())
           if(ismatch == true){
               filteredItems.push(item)
           }
       }
       return filteredItems
    }
    
    
    var pencarian = document.getElementById('formItem')
    pencarian.addEventListener("submit", function (event) {
       event.preventDefault()
       var keyword = document.getElementById('keyword').value
       
       var kefilter = filter(keyword)
       printItems(kefilter)
    })
    
    var inputpencarian = document.getElementById('keyword')
    inputpencarian.addEventListener("keyup", function (event){
       var input = event.target.value
    
       var input = filter(input)
       printItems(input)
    })

