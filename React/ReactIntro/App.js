var ListaUl = (props) => {
    return (
        <ul>
       { props.voce.map((el) => (
          <ListicaLi a={el}/>
       ))}
        
        </ul>
    );
}

var ListicaLi = (props) => {
    return (
        <li>{props.a}</li>
    );
}

var KakoHoces = (props) => {
    return (
    <h1>Hello World (preko fukcije)</h1>
    );
}

var App = (props) => {
    return (
        <div>
            <h1>Hello World</h1>
            <p>{props.title}</p>
            <KakoHoces/>
            <ListaUl voce = {props.fruits} />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App title={"Caooooooo"} fruits={["Apple", "Dog", "Telephone"]}/>,rootElement);


//-----------------------------------------PROMISE-----------------------------------------------------

function withPromise(title) {

    // uzimamo nasumično broj od 1000 do 2000
    var wait = Math.floor(Math.random() * 1000);

    var promise = new Promise(function(resolve, reject) {

        if (typeof wait !== "number") {
            reject("Wait mora biti broj")
        }

        setTimeout(function() {
             resolve(title + 'ok   ' + typeof title + '  ');
             console.log(wait + '   '+title);
        }, wait);

    });


    console.log('aaaaaaaaaaa')
    return promise;
}


// više ne prosleđujemo callback funkciju
withPromise('1').then(function(data) {
    console.log(data)
    return withPromise(data)
}).then(function(data) {
    console.log(data)
    return withPromise(data)
}).then(function(data) {
    console.log(data);
});



//-----------------------------------------------------------------------------
function withPromise(title) {

    // uzimamo nasumično broj od 1000 do 2000
    var wait = Math.floor(Math.random() * 1000);

    var promise = new Promise(function(resolve, reject) {

        if (typeof wait !== "number") {
            reject("Wait mora biti broj")
        }

        setTimeout(function() {
            return resolve(title + ": " + (wait / 1000) + " sekundi");
        }, wait);

    });

    return promise;
}


// više ne prosleđujemo callback funkciju
withPromise("1").then(function(data) {
    console.log(data + "\n");
}).catch(function(error) {
        // obrada greške
});

// jedan od načina vezivanja više poziva
Promise.all([withPromise("1"), withPromise("2"), withPromise("3")])
    .then(function(values) {

        for (data in values) {
            console.log(values[data] + "\n");
        }
    });

// ko će brže vratiti rješenje?
Promise.race([withPromise("1"), withPromise("2"), withPromise("3")])
    .then(function(data) {
        console.log("Ja sam najbrži: " + data + "\n");
    });

    //-------------------------------------------------------------------------------------------
    var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

// 2nd promise
var showOff = function (phone) {
    return new Promise(
        function (resolve, reject) {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        }
    );
};

// call our promise
var askMom = function () {
    console.log('before asking Mom'); // log before
    willIGetNewPhone
        .then(showOff)
        .then(function (value) {
            console.log(value);
	     // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            console.log(error.message);
	     // output: 'mom is not happy'
        });
    
    console.log('after asking mom'); // log after
};

askMom();