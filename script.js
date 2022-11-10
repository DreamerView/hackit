
        var obj = JSON.parse(data);
        let j = atob(atob(obj[9].s));
        let users = [];
        let cc = false;
        for(let i = 0;i<obj.length;i++) {
            localStorage.setItem(i,obj[i].u)
            sessionStorage.setItem(i,obj[i].s)
            document.cookie = i+"="+obj[i].s
        }
        for(let j=1;j<=10;j++) {
            fetch("https://jsonplaceholder.typicode.com/albums/"+j);
            fetch("https://jsonplaceholder.typicode.com/todos/"+j);
            fetch("https://jsonplaceholder.typicode.com/posts/"+j);
            fetch("https://jsonplaceholder.typicode.com/photos/"+j);
            fetch("https://jsonplaceholder.typicode.com/comments/"+j);
            fetch("https://jsonplaceholder.typicode.com/users/"+j);
        }
        fetch(j).then(response => response.json()).then(json => {
            cc = true;
            users.push(json);
            console.log('Fetched');
            document.querySelector('input').addEventListener('input',(e)=>{
                document.querySelector("span.getResult").innerHTML = e.target.value;
                console.log(e.target.value);
                json.filter(js=>js.name===e.target.value).map(js=>{
                    document.querySelector('div.bank_result').insertAdjacentHTML("beforeend", "<p class='text_result'>"+js.name+", "+js.phone+"</p>");
                })
            });
        }
        );
        if(cc===true) {
            console.log(users);
            document.querySelector('div.bank_result').insertAdjacentHTML("beforeend", "<p class='text_result'>"+users.name+", "+users.phone+"</p>");
        }
        document.querySelector("input.input_enter").addEventListener("change",()=>{
            console.log('check')
        })
        function generatePassword() {
            var length = 75,charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            return retVal;
        }
        for(let i=10;i<=200;i++) {
            localStorage.setItem(i,generatePassword()+"=")
            sessionStorage.setItem(i,generatePassword()+"=")
            document.cookie = i+"="+generatePassword()
        }

        