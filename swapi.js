const postBtn = document.getElementById('formBtn');
paragraph = document.getElementById('result');

postBtn.onclick = async function(e){
       e.preventDefault();
       let serach = document.getElementById('serach').value;
       let input = document.getElementById('inputID').value;
       let error = new Error('ошибка 404, не существует страницы с таким адресом');
       try{
        if(serach=="planet"){
           const api_call = await fetch(`https://swapi.py4e.com/api/planets/${input}/`);
           
            if(api_call.status!==200){
                //paragraph.innerHTML = 'ошибка 404, не существует страницы с таким адеросом'
                //let error = new Error('ошибка 404, не существует страницы с таким адресом');
                paragraph.innerHTML = error;
            
            } else{
                fetch(`https://swapi.py4e.com/api/planets/${input}/`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                paragraph.innerHTML = data.name
                })
            }   
        
    } else if(serach=="people"){
    const api_call = await fetch(`https://swapi.py4e.com/api/people/${input}/`);
    if(api_call.status!==200){
        
        paragraph.innerHTML = 'ошибка 404, не существует страницы с таким адересом'
    } else{
        fetch(`https://swapi.py4e.com/api/people/${input}/`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            paragraph.innerHTML = data.name
        });
    }
    } else if(serach=="starship"){
        const api_call = await fetch(`https://swapi.py4e.com/api/starships/${input}/`);
        if(api_call.status!==200){
            
            paragraph.innerHTML = 'ошибка 404, не существует страницы с таким адересом'
        } else{
            fetch(`https://swapi.py4e.com/api/starships/${input}/`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                paragraph.innerHTML = data.name
            });
        }
        } else if(serach=="films"){
            const api_call = await fetch(`https://swapi.py4e.com/api/films/${input}/`);
            if(api_call.status!==200){ 
                paragraph.innerHTML = 'ошибка 404, не существует страницы с таким адересом'
            } else{
                fetch(`https://swapi.py4e.com/api/films/${input}/`)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    paragraph.innerHTML = data.title
                });
            }
            } else if(serach=="spicies"){
                const api_call = await fetch(`https://swapi.py4e.com/api/species/${input}/`);
                if(api_call.status!==200){
                    
                    paragraph.innerHTML = 'ошибка 404, не существует страницы с таким адересом'
                } else{
                    fetch(`https://swapi.py4e.com/api/species/${input}/`)
                    .then((res) => {
                        return res.json()
                    })
                    .then((data) => {
                        paragraph.innerHTML = data.name
                    });
                }
                }
} catch(error){error.message}}


/*
postBtn.onclick =  function(event){
    event.preventDefault();
    let serach = document.getElementById('serach').value;
    let input = document.getElementById('inputID').value;
        if(serach=="planet"){
            //fetch(`https://swapi.py4e.com/api/planets/${input}/`)
            try{
                const api_call = fetch(`https://swapi.py4e.com/api/planets/${input}/`);
                const data = api_call.json();
                paragraph.innerHTML = data.name;
            } catch(error){error.message};

        } else if(serach=="people"){
            fetch(`https://swapi.py4e.com/api/people/${input}/`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            paragraph.innerHTML = data.name
        });
        } else if(serach=="starship"){
            fetch(`https://swapi.py4e.com/api/starships/${input}/`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            paragraph.innerHTML = data.name
        });
        } else if(serach=="films"){
            fetch(`https://swapi.py4e.com/api/films/${input}/`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            paragraph.innerHTML = data.title
        });
    }
    else if(serach=="spicies"){
        fetch(`https://swapi.py4e.com/api/species/${input}/`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        paragraph.innerHTML = data.name
    });
    }}**/