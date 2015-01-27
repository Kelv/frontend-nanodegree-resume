/*$('#header').append();
$('#main').append('Kelvin')*/

var formattedName = HTMLheaderName.replace("%data%", "Kelvin Rodriguez");
$('#header').append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", "Mechatronics Technician");
$("#header").append(formattedRole);