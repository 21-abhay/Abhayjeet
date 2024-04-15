

// ------Change Profile Tag-----------
var profile = document.getElementById('profile');
var list = ['Abhayjeet Kumar', 'Student','Web developer']
var k = 0;
setInterval(() => {
  profile.innerText = list[k];
  // for (let i = 0; i < list[k].length; i++) {
  //   profile.innerText = list[k].slice(0,i+1);
  // }
  k=k+1;
  if(k==list.length){
    k=0;
  }
}, 3000);



// -------About Link and Tab effects----------
var tablinks = document.querySelectorAll('.tab-links');
var tabcontents = document.querySelectorAll('.tab-contents');
function opentab(tabname){
    tablinks.forEach(tablink => {
        tablink.classList.remove('active-link');
    });
    tabcontents.forEach(tabcontent => {
        tabcontent.classList.remove('active-tab');
    });
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab')
}



// ----------MENU------------
var sidemenu = document.getElementById('sidemenu');
function openmenu(){
    sidemenu.style.right = '0px';
}
function closemenu(){
    sidemenu.style.right = '-200px';
}



// --------------SET SERVICEs from JSON--------------
// Fetch the JSON data using Fetch API
fetch('service.json')
  .then(response => response.json())
  .then(services => {
    services.forEach(service => {
        var div = document.createElement('div');
        var h2 = document.createElement('h2');
        var p = document.createElement('p');
        var a = document.createElement('a');
        h2.innerText = service.service;
        p.innerText = service.description;
        a.innerText = 'Learn more';
        a.setAttribute('href',service.url)
        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(a);
        document.getElementsByClassName('services-list')[0].appendChild(div)
    });
    
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


  
// --------------SET PROJECTS / MY WORK from JSON--------------
// Fetch the JSON data using Fetch API
fetch('projects.json')
.then(response => response.json())
.then(projects => {
    let icon = '<i class="fa-solid fa-link"></i>'
  projects.forEach(project => {
      var div = document.createElement('div');
      var img = document.createElement('img');
      var div2 = document.createElement('div');
      var h2 = document.createElement('h2');
      var p = document.createElement('p');
      var a = document.createElement('a');
      h2.innerText = project.name;
      p.innerText = project.description;
    //   a.innerText = 'Learn more';
    a.innerHTML = icon;
      a.setAttribute('href',project.url)
      img.setAttribute('src',project.image)
      div2.appendChild(h2);
      div2.appendChild(p);
      div2.appendChild(a);
      div2.classList.add('layer')
      div.appendChild(img);
      div.appendChild(div2);
      div.classList.add('work')
    //   console.log(div);
      document.getElementsByClassName('work-list')[0].appendChild(div)
  });
  
})
.catch(error => {
  // Handle fetch errors
  console.error('Error fetching data:', error);
});





// -----------Contact Handled Using Google Sheet-----------
const scriptURL = 'https://script.google.com/macros/s/AKfycbxzEZ9WJv_Shjb2uGKCgn0WXPdOAlB0zW4_M3Jvic6SMv2fRzAV3ssYS8Ct-S4PU-_5/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        // console.log('Success!', response);
        var msg = document.getElementById('msg');
        msg.innerText = "Form is submitted successfully....";
        msg.style.display = 'block';
        form.reset();
        setTimeout(() => {
            msg.style.display = 'none';
        }, 5000);
      })
      .catch(error => console.error('Error!', error.message))
})