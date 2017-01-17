$(document).ready(function(){
  var tasks = ['Finish weekend Angular homeowkr for Epicodus course', 'Begin brainsroming possible Javascript group projects', "Add README file to last few Angular repos on GitHub"];
  tasks.forEach(function(currentTask){
    $('.to-do-list').append(currentTask)
  });
});
