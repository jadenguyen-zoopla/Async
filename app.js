import fetch from "node-fetch";
import moment from "moment";

// //make a get request to this API, and log the status code to the console.
// fetch("https://cat-fact.herokuapp.com/facts/random")
//     // turn response into json
//     .then(result => result.json())
//     // console log just the text result
//     .then(jsonResult => console.log(jsonResult.text));

    
    const fetchCatFactOld = () => {
        return new Promise((resolve, reject) => {
            fetch("https://cat-fact.herokuapp.com/facts/random")
            .then(response => response.json())
            .then(json => {
                const oneMonthAgo = moment().subtract(30, "days");
                const updatedAt = moment(json.updatedAt);

                if (oneMonthAgo < updatedAt) {
                    resolve(json.text);
                }
                else {
                    reject("Fact was too old");
                }
            })
        });
    }


    const fetchCatFact = async () => {
        const response = await fetch("https://cat-fact.herokuapp.com/facts/random");
        const json = await response.json();

        const oneMonthAgo = moment().subtract(30, "days");
        const updatedAt = moment(json.updatedAt);

        if (oneMonthAgo < updatedAt) {
            return json.text;
        }
        throw Error("Fact was too old");
    }

    fetchCatFact()
        .then(console.log)
        .catch(console.log);

        // fetchCatFact().then(console.log).catch((Error)=> console.error(Error));