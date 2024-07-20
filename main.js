const searchInput = document.querySelector("#search-input");

searchInput.addEventListener ( "keydown", function(event) 
{
    if( event.code === "Enter"){
        search();
    }
} 
);

function search()
{
    const input= searchInput.value;

    window.location.href= "https://www.google.com/search?q=" + input + "&rlz=1C1ONGR_enIN1063IN1063&oq=" + input +"&gs_lcrp=EgZjaHJvbWUqDQgAEAAY4wIYsQMYgAQyDQgAEAAY4wIYsQMYgAQyCggBEC4YsQMYgAQyCggCEC4YsQMYgAQyDQgDEAAYgwEYsQMYgAQyCggEEAAYsQMYgAQyEwgFEC4YgwEYrwEYxwEYsQMYgAQyDQgGEAAYgwEYsQMYgAQyCggHEC4YsQMYgAQyEAgIEAAYgwEYsQMYgAQYigUyDQgJEAAYgwEYsQMYgATSAQc3NTlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
}