
const path = require('path');
const createPath = (page) => path.resolve(__dirname,'..', 'ejs-views', `${page}.ejs`);
module.exports = function(app){

    app.get('/', (req, res) => {
        // вставка title
        const title = 'Олимпиада Можайского ';
    
        // вставка одной переменной content
        const content = "Контент Одимпиады";
    
        // вставка списка словарей list
        var list = [{name_fac:'1 факультет',name_spez:'Конструкиця летательный аппаратов',years:'пример 199999'},
        {name_fac:'2 факультет',name_spez:'Энергетики',years:'пример 299999'},
        {name_fac:'3 факультет',name_spez:'Люди с шапочками из фольги',years:'пример '},
        {name_fac:'4 факультет',name_spez:'Строители',years:'пример 199999'},
        {name_fac:'5 факультет',name_spez:'Спец связб со спутниками',years:'пример 199999'}
    ];
    
    // обращение к методам списка
        const len_list_ = list.length
    // переход на start_page с передачей переменных
        res.render(createPath('start_page'), { title:title, content:content,list:list,len_list_:len_list_ });
    });
  
}