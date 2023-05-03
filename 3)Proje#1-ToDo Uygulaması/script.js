const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll =document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');

//otomatik olarak Task List te veri ekledik.
//veri tabanından bir değer almak istersek kullanırız.
const items = ['item1','item 2','item 3'];  



function eventListeners(){
    //event imizi kaydettik.
    form.addEventListener('submit',addNewItem);

    //event silme işlemi:
    taskList.addEventListener('click',deleteItem);

    //(deleteAll) butona tıkladığımızda tüm verileri silsin.
    btnDeleteAll.addEventListener('click',deleteAllItems);
}

//eventkeri gösterdik.
eventListeners();

function loadItems(){
    items.forEach(function(item){
        createItem(item);
    })
}

function createItem(text){
    //li etiketi oluşturduk.
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    //a etiketi oluşturduk.
    const a =document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href','#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    //li etiketi ile a etiketini ilişkilendirdik.
    li.appendChild(a);

    //ul etiketi ile li yi ilişkilendirdik.
    taskList.appendChild(li);
}

//load items:
loadItems();

//add event fonksiyonları
function addNewItem(e){
    if(input.value === ''){
        alert("input'a değer giriniz.");
   
    }

    //create item
    createItem(input.value);

    //input clear
    input.value = '';

}

//tek silme fonksiyonu
function deleteItem(e){
    if(e.target.className ==='fas fa-times'){

        if(confirm('silmek istediğinize emin misiniz?')){
             //2 tane parentElement dememizin nedeni li etiketine ulaştık.
            //tek bir elemanı bu şekilde siliyoruz.
            e.target.parentElement.parentElement.remove(); 
        }
       
    }
}

//tüm bilgileri silme fonksiyonu
function deleteAllItems(e){
    if(confirm('tamamı silinecek emin misiniz?'))
    {
        //1.yol:
        //taskList.innerHTML = '';

        //2.yol:
        taskList.childNodes.forEach(function(item)
        {
            if(item.nodeType===1){
                item.remove();
            }
        });

    }
}