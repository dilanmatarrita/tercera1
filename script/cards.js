console.log("cards cargado");

const datacards = [
    {
        "title": "anime de la temporada",
        "url_image":"",
        "desc":"El mas visto",
        "cta":"ver mas..",
        "link":""
    }
]

(function (){
    let CARD ={
        init:function(){
            let _self = this;
            this.insertdata(_self);
           },

        
        insertdata: function (_self){
            datacards.map(function(item, index){

                document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplcard(item, index));
            })
        },

        tplcardItem :function(item , index){
            return(`<div class='card-item id='card-number-${index}'>
                <img src='${item.url_image}'>
                <div class='card-info'>
                 <p class='card-title'>${item.title}</p>
                 <p class='card-desc'>${item.desc}</p>
                 <a class='card-cta' target='_blank' href='${item.link}'>${item.cta}</a>
                </div>
            </div>`)
        }

    }
    CARD.init();
                
})();