function getData() {
    let url = 'http://newsapi.org/v2/top-headlines?country=in&pageSize=40&apiKey=ca0af7aad78f475ead1b57da51defce3';
    fetch(url).then(response => response.json())
        .then((data) => {
            let newsData = data.articles;
            let newsHtml = "";
            newsData.forEach((element, index) => {
                console.log(element, index);
                if (index === 0) {
                    newsHtml += `<div class="card">
                <div class="card-header" id="heading${index}">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                            data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            ${element.title};
                        </button>
                    </h2>
                </div>
                <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}"
                    data-parent="#newsAccordion">
                    <div class="card-body">
                        ${element.content} <a href="${element.url}" target=_blank>Read more</a>
                    </div>
                </div>
            </div>`
                }
                else {
                    newsHtml += `<div class="card">
                    <div class="card-header" id="heading${index}">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                                ${element.title};
                            </button>
                        </h2>
                    </div>
                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                        data-parent="#newsAccordion">
                        <div class="card-body">
                            ${element.content} <a href="${element.url}" target=_blank>Read more</a>
                        </div>
                    </div>
                </div>`
                }
            });
            document.getElementById("newsAccordion").innerHTML = newsHtml;
        });
}
getData();
