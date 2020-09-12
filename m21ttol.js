$(document).ready(function(){

/***menu league title and additional links********************************************************************************************/
$( "a.navbar-brand" ).text( "ttol" );
$("div#dlmaddenmenu ul.navbar-nav ").append('<a href="http://www.daddyleagues.com/ttol/admin/sync_week" class="btn btn-info ajax" role="button" data-method="post" data-disabled="true" data-loader=".ajax-loader-roster" data-html=".rosterresults">  <img class="ajax-loader-roster" style="display:none" alt="Sending ..." src="/img/ajax-loader.gif"> <em class="icon-wrench"></em></a>');

/***scoreboard**********************/
 $( "div#flip2").load( "/ttol/schedules div#scores" );
 $('div#flip2').attr('class', 'simple-ticker');
$('.simple-ticker').attr('id', 'js-ticker-fade');
    $("div#js-ticker-fade").hide();
    $("#flip").on("click", function(){
        $("div#js-ticker-fade").fadeToggle('slow');
    });
 $( "div#flip" ).load( "/ttol/admin .col-xl-6:nth-child(1) .card.text-center.card-default .card-body h4.card-title" );
 $( "div#mem").load( "/ttol/admin ul.navbar-nav.flex-row.mr-3 " );

/*league leaders home page********/
$( ".passingleaders" ).load( "/ttol/stats/player/passing  .col-xl-10" );
$( ".rushingleaders" ).load( "/ttol/stats/player/rushing .col-xl-10" );
$( ".receivingleaders" ).load( "/ttol/stats/player/receiving .col-xl-10" );
$( ".sacksleaders" ).load( "/ttol/stats/player/defense?sortby=sack  .col-xl-10" );
$( ".tacklesleaders" ).load( "/ttol/stats/player/defense?sortby=tackles .col-xl-10" );
$( ".interceptionsleaders" ).load( "/ttol/stats/player/defense?sortby=int .col-xl-10" );

/*standings tabs*******************************************************/
 $( ".afc.standings").load( "/ttol/standings .card.card-default:nth-child(4)" );
 $( ".nfc.standings").load( "/ttol/standings .card.card-default:nth-child(5)" );

/*All Teams Page**********************************************************/
if(window.location.href=== "http://www.daddyleagues.com/ttol/teams") {
         $(".col-xl-10").addClass("teams");
     }

/*Standings Page*********************************************************/
if(window.location.href=== "/ttol/standings") {
         $(" .table-responsive").addClass("table-responsive-page");
     }

/****Game of the Week******************************************************/
/*BEARS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/0.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/CHI.svg")').wrapInner( "<div id='host'><p>Username</p><p>chicago</p><p>bears</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/0.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/CHI.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Chicago</p><p>Bears</p></div>");

/*BENGALS*/
$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/1.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/CIN.svg")').wrapInner( "<div id='host'><p>Username</p><p>Cincinnati</p><p>Bengals</p></div>");
$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/1.png"]').attr( "style", "" ).css ( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/CIN.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Cincinnati</p><p>Bengals</p></div>");

/*BILLS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/2.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/U6fPpSU.png")').wrapInner( "<div id='host'><p>Sandman</p><p>Buffalo</p><p>Bills</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/2.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/BUF.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Buffalo</p><p>Bills</p></div>");



/*BRONCOS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/3.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/eGq6jyQ.png")').wrapInner( "<div id='host'><p>Username</p><p>Denver</p><p>Broncos</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/3.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/DEN.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Denver</p><p>Broncos</p></div>");

/*BROWNS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/4.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/kDT2mfa.png")').wrapInner( "<div id='host'><p>Username</p><p>Cleveland</p><p>Browns</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/4.png"]').attr( "style", "" ).css( 'background-image', 'url("https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/CLE.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Cleveland</p><p>Browns</p></div>");



/*BUCCANEERS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/5.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/Wu3mPB6.png")').wrapInner( "<div id='host'><p>Username</p><p>Tampa Bay</p><p>Buccaneers</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/5.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/TB.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Tampa Bay</p><p>Buccaneers</p></div>");


/*CARDINALS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/6.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/6TGa2yB.png")').wrapInner( "<div id='host'><p>Username</p><p>Arizona</p><p>Cardinals</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/6.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/ARI.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Arizona</p><p>Cardinals</p></div>");


/*CHARGERS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/7.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/i88U9sG.png")').wrapInner( "<div id='host'><p>Username</p><p>Los Angeles</p><p>Chargers</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/7.png"]').attr( "style", "" ).css( 'background-image', 'url("https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/LAC.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Los Angeles</p><p>Chargers</p></div>");


/*CHIEFS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/8.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/MlMFRzS.png")').wrapInner( "<div id='host'><p>Username</p><p>Kansas City</p><p>Chiefs</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/8.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/KC.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Kansas City</p><p>Chiefs</p></div>");


/*COLTS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/9.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/IND.svg")').wrapInner( "<div id='host'><p>Username</p><p>Indianapolis</p><p>Colts</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/9.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/IND.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Indianapolis</p><p>Colts</p></div>");


/*HASSAN*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/10.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/DAL.svg")').wrapInner( "<div id='host'><p>Username</p><p>Dallas</p><p>Cowboys</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/10.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/DAL.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Dallas</p><p>Cowboys</p></div>");


/*DOLPHINS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/11.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/7XF7mEe.png")').wrapInner( "<div id='host'><p>Username</p><p>Miami</p><p>Dolphins</p></div>");
$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/11.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/MIA.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Miami</p><p>Dolphins</p></div>");

/*EAGLES*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/12.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/PHI.svg")').wrapInner( "<div id='host'><p>Username</p><p>Philadelphia</p><p>Eagles</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/12.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/nyI0AZQ.png")').wrapInner( "<div id='visitor'><p>Username</p><p>Philadelphia</p><p>Eagles</p></div>");


/*FALCONS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/13.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/BiTQCab.png")').wrapInner( "<div id='host'><p>Username</p><p>Atlanta</p><p>Falcons</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/13.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/ATL.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Atlanta</p><p>Falcons</p></div>");


/*49ERS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/14.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/SF.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>San Francisco</p><p>49ers</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/14.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/SF.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>San Francisco</p><p>49ers</p></div>");


/*GIANTS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/15.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/NYG.svg")').wrapInner( "<div id='host'><p>Username</p><p>New York</p><p>Giants</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/15.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/NYG.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>New York</p><p>Giants</p></div>");


/*JAGUARS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/16.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/bZVk0nE.png")').wrapInner( "<div id='host'><p>Username</p><p>Jacksonville</p><p>Jaguars</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/16.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/JAC.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Jacksonville</p><p>Jaguars</p></div>");


/*JETS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/17.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/NYJ.svg")').wrapInner( "<div id='host'><p>Username</p><p>New York</p><p>Jets</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/17.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/NYJ.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>New York</p><p>Jets</p></div>");


/*LIONS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/18.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/STSHJbV.png")').wrapInner( "<div id='host'><p>Username</p><p>Detroit</p><p>lions</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/18.png"]').attr( "style", "" ).css( 'background-image', 'url("https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/DET.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>detroit</p><p>lions</p></div>");


/*PACKERS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/19.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/GB.svg")').wrapInner( "<div id='host'><p>Username</p><p>Green Bay</p><p>Packers</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/19.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/GB.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Green Bay</p><p>Packers</p></div>");



/*PANTHERS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/20.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/mbMWd1p.png")').wrapInner( "<div id='host'><p>Username</p><p>Carolina</p><p>Panthers</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/20.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/CAR.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Carolina</p><p>Panthers</p></div>");


/*PATRIOTS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/21.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/ReOPZ0M.png")').wrapInner( "<div id='host'><p>Username</p><p>New England</p><p>patriots</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/21.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/NE.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>New England</p><p>Patriots</p></div>");


/*RAIDERS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/22.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/OAK.svg")').wrapInner( "<div id='host'><p>Username</p><p>Oakland</p><p>Raiders</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/22.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/OAK.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Oakland</p><p>Raiders</p></div>");


/*RAMS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/23.png"]').attr( "style", "" ).css( 'background-image', 'url("https://static.nfl.com/static/site/img/logos/500x500/LA.png")').wrapInner( "<div id='host'><p>Username</p><p>Los Angeles</p><p>Rams</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/23.png"]').attr( "style", "" ).css( 'background-image', 'url("https://static.nfl.com/static/site/img/logos/500x500/LA.png")').wrapInner( "<div id='visitor'><p>Username</p><p>Los Angeles</p><p>Rams</p></div>");


/*RAVENS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/24.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/U84hoeM.png")').wrapInner( "<div id='host'><p>Username</p><p>Baltimore</p><p>Ravens</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/24.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/BAL.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Baltimore</p><p>Ravens</p></div>");


/*REDSKINS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/25.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/EbZGOCw.png")').wrapInner( "<div id='host'><p>Username</p><p>Washington</p><p>Redskins</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/25.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/WAS.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Washington</p><p>Redskins</p></div>");



/*SAINTS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/26.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/NO.svg")').wrapInner( "<div id='host'><p>Username</p><p>New Orleans</p><p>Saints</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/26.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/NO.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>New Orleans</p><p>Saints </p></div>");


/*SEAHAWKS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/27.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/AYPe3aY.png")').wrapInner( "<div id='host'><p>Username</p><p>Seattle</p><p>Seahawks</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/27.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/SEA.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Seattle</p><p>Seahawks</p></div>");

/*STEELERS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/28.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/PIT.svg")').wrapInner( "<div id='host'><p>Username</p><p>Pittsburgh</p><p>Steelers</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/28.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/PIT.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Pittsburgh</p><p>Steelers</p></div>");


/*TITANS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/29.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/iY9uxhq.png")').wrapInner( "<div id='host'><p>Username</p><p>Tennessee</p><p>Titans</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/29.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/TEN.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Tennessee</p><p>Titans</p></div>");
	

/*VIKINGS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/30.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/wh3z8uB.png")').wrapInner( "<div id='host'><p>Username</p><p>Minnesota</p><p>Vikings</p></div>");
       $('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/30.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/MIN.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Minnesota</p><p>Vikings</p></div>");


/*TEXANS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/31.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/1OJdXcp.png")').wrapInner( "<div id='host'><p>Username</p><p>Houston</p><p>Texans</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/31.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/HOU.svg")').wrapInner( "<div id='visitor'><p>Username</p><p>Houston</p><p>Texans</p></div>");

	
/*Shamrocks*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/179.png"]').attr( "style", "" ).css( 'background-image', 'url("/img/nfl/teams/right/179.png")').wrapInner( "<div id='host'><p>Username</p><p>Dublin</p><p>Shamrocks</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/179.png"]').attr( "style", "" ).css( 'background-image', 'url("/img/nfl/teams/left/179.png")').wrapInner( "<div id='visitor'><p>Username</p><p>Dublin</p><p>Shamrocks</p></div>");

/*Black Knights*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/163.png"]').attr( "style", "" ).css( 'background-image', 'url("/img/nfl/teams/right/163.png")').wrapInner( "<div id='host'><p>Username</p><p>London</p><p>Black Knights</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/163.png"]').attr( "style", "" ).css( 'background-image', 'url("/img/nfl/teams/left/163.png")').wrapInner( "<div id='visitor'><p>Username</p><p>London</p><p>Black Knights</p></div>");

/*Crusaders*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/155.png"]').attr( "style", "" ).css( 'background-image', 'url("/img/nfl/teams/right/155.png")').wrapInner( "<div id='host'><p>Username</p><p>San Diego</p><p>Crusaders</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/155.png"]').attr( "style", "" ).css( 'background-image', 'url("/img/nfl/teams/left/155.png")').wrapInner( "<div id='visitor'><p>Username</p><p>San Diego</p><p>Crusaders</p></div>");

/*Bulldogs*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/144.png"]').attr( "style", "" ).css( 'background-image', 'url("/img/nfl/teams/right/144.png")').wrapInner( "<div id='host'><p>Username</p><p>London</p><p>Bulldogs</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/144.png"]').attr( "style", "" ).css( 'background-image', 'url("/img/nfl/teams/left/144.png")').wrapInner( "<div id='visitor'><p>Username</p><p>London</p><p>Bulldogs</p></div>");

/*Condors*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/147.png"]').attr( "style", "" ).css( 'background-image', 'url("/img/nfl/teams/right/147.png")').wrapInner( "<div id='host'><p>Username</p><p>Sacramento</p><p>Condors</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/147.png"]').attr( "style", "" ).css( 'background-image', 'url("/img/nfl/teams/left/147.png")').wrapInner( "<div id='visitor'><p>Username</p><p>Sacramento</p><p>Condors</p></div>");

/*Diablos*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/152.png"]').attr( "style", "" ).css( 'background-image', 'url("/img/nfl/teams/right/152.png")').wrapInner( "<div id='host'><p>Username</p><p>Mexico City</p><p>Diablos</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/152.png"]').attr( "style", "" ).css( 'background-image', 'url("/img/nfl/teams/left/152.png")').wrapInner( "<div id='visitor'><p>Username</p><p>Mexico City</p><p>Diablos</p></div>");

/*Barons*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/187.png"]').attr( "style", "" ).css( 'background-image', 'url("/img/nfl/teams/right/187.png")').wrapInner( "<div id='host'><p>Username</p><p>Brooklyn</p><p>Barons</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/187.png"]').attr( "style", "" ).css( 'background-image', 'url("/img/nfl/teams/left/187.png")').wrapInner( "<div id='visitor'><p>Username</p><p>Brooklyn</p><p>Barons</p></div>");

/*Gunners*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/160.png"]').attr( "style", "" ).css( 'background-image', 'url("/img/nfl/teams/right/160.png")').wrapInner( "<div id='host'><p>Username</p><p>Houston</p><p>Gunners</p></div>");
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/160.png"]').attr( "style", "" ).css( 'background-image', 'url("/img/nfl/teams/left/160.png")').wrapInner( "<div id='visitor'><p>Username</p><p>Houston</p><p>Gunners</p></div>");	
});

/***Splash page***/
$('.Splash.col-lg-12.col-md-12.col-sm-12.col-xs-12').fadeIn('slow').delay(2000).fadeOut('slow');

/*DL personal menu ****/
$( ".dropdown-menu.dropdown-menu-right.animated.flipInX.show" ).wrap( "<div class='col-xl-12'></div>" );





/*GOW************************************************************************************************************/
$('.col-3.d-flex.align-items-center.justify-content-center.rounded-left').attr('class', ' col-6 d-flex align-items-center justify-content-center rounded-left');
 $('.col-3.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right').attr('class', ' col-6 bg-inverse d-flex align-items-center justify-content-center rounded-right');
 $('.row.row-flush .col-3:nth-child(2)').attr('class', ' gow away score');
$('.row.row-flush .col-3:nth-child(3)').attr('class', ' gow home score');
 $('.align-right.clickable.ng-scope').attr('class', ' col-lg-12 col-md-12 col-sm-12 col-xs-12 GOW left');
 $('.clickable.ng-scope').attr('class',  'col-lg-12 col-md-12 col-sm-12 col-xs-12  GOW right');
 $('.gameoftheweek .cfm-table tr td.cfm-at').attr('class', 'col-lg-12 col-md-12 col-sm-12 col-xs-12 at');
$('.gameoftheweek').attr('class', 'col-lg-12 col-md-12 col-sm-12 col-xs-12 gameoftheweek');
$('.gameoftheweek .GOW').wrapInner('<div class="record"></div>');
 $( ".gow.away.score" ).appendTo( $( ".col-6.d-flex.align-items-center.justify-content-center.rounded-left" ) );
$( ".gow.home.score" ).appendTo( $( ".col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right" ) );

/*storylines***/
 $('.slideshow').attr('class', 'col-lg-12 col-md-12 col-sm-12 col-xs-12 slideshow');
$('.col-md-9.col-xs-9.col-sm-9').attr('class', 'col-md-12  col-xs-12 col-sm-12');
$('.col-md-10.col-xs-10.col-sm-10').attr('class', 'col-md-12  col-xs-12 col-sm-12');
$('div#hp-stories').attr('class', 'slideshow');
$('.blogpost.clearfix').attr('class', 'slideitem current');
$('.blogpostbody').attr('class', 'info');
$('img.blogpostimage').attr('class', 'img');
$('  div#hp-stories h4').attr('class', '.carousel-caption h3');
$("#slideshow > div:gt(0)").hide();


/*Playoff Race****/
  $("div#afc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").hide();
    $("div#afc_playoff .list-group h4").on("click", function(){
        $("div#afc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").slideToggle('slow');
});
 $("div#nfc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").hide();
    $("div#nfc_playoff .list-group h4").on("click", function(){
        $("div#nfc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").slideToggle('slow');
});


/*Standings tab***/
$(".col-xl-10.teams .row .col-xl-6").attr("class","col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12");

/*Game Recap Page***/
$( ".card.b" ).wrap( "<div class='col-xl-12'></div>" );
$(".card.Awayteam.flex-row.align-items-center.align-items-stretch.border-0 .col-12.py-3.card-madden-team.rounded-right").appendTo(".card.Awayteam.flex-row.align-items-center.align-items-stretch.border-0 .col-8.py-3.card-madden-team.rounded-right");
$(".card.Hometeam.flex-row.align-items-center.align-items-stretch.border-0 .col-12.py-3.card-madden-team.rounded-right").appendTo(".card.Hometeam.flex-row.align-items-center.align-items-stretch.border-0 .col-8.py-3.card-madden-team.rounded-right");
$('.card.b .card-body.bb p.mb-0').contents().filter(function() {
    return this.nodeType == 3
}).each(function(){
    this.textContent = this.textContent.replace('Passing Yards Allowed','Pass Yds Allowed');
});
$('.card.b .card-body.bb p.mb-0').contents().filter(function() {
    return this.nodeType == 3
}).each(function(){
    this.textContent = this.textContent.replace('Rushing Yards Allowed','Rush Yds Allowed');
});
$('.card.b .card-body.bb p.mb-0').contents().filter(function() {
    return this.nodeType == 3
}).each(function(){
    this.textContent = this.textContent.replace('DaddyLeagues estimated Score','Predicted Score');
});


/*Schedules***/
$('.row.row-flush.cfm-team-schedule .col-1.text-center.d-flex.align-items-center.justify-content-center.rounded-left').attr('class', 'col-1 text-center d-flex align-items-center justify-content-center rounded-left');
$('.row.row-flush.cfm-team-schedule .col-2.d-flex.justify-content-start').attr('class', 'col-4 d-flex  justify-content-start');
$('.row.row-flush.cfm-team-schedule .col-6').attr('class', 'col-2');
$('.row.row-flush.cfm-team-schedule .col-3.text-center.d-flex.align-items-end.justify-content-end.rounded-right').attr('class', 'col-4 d-flex  justify-content-start');
$('.col-1.text-center.d-flex.align-items-center.justify-content-center.rounded-left').detach( );
$('.col-4.d-flex.justify-content-start').attr('class', 'col-5 d-flex  justify-content-start');


/*Player Page***/
$( "ul.nav.nav-tabs" ).wrap( "<div class='col-xl-12'></div>" );
$(".col-md-6.col-xs-6.col-sm-6 .card .d-flex.Teamcolors").appendTo(".card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors .col-10.py-3.rounded-right.cfm-player-info");
$(".xl-12").appendTo(".card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors .col-10.py-3.rounded-right.cfm-player-info");
$(".col-xl-12 ul.nav.nav-tabs").appendTo(".card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors .col-10.py-3.rounded-right.cfm-player-info");
$('table.dl-table1.madden-team-table').appendTo(".card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors .col-10.py-3.rounded-right.cfm-player-info");
$(".col-xl-12.col-lg-6.col-md-12.pt-2").appendTo(".card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors .col-10.py-3.rounded-right.cfm-player-info");
$(".col-xl-10.col-lg-6.col-md-12.pt-2").appendTo(".card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors .col-10.py-3.rounded-right.cfm-player-info");
$('.col-1.d-flex.align-items-left.justify-content-center.cfm-player-team-logo').attr('class', 'col-12 d-flex align-items-left justify-content-center cfm-player-team-logo');
$('.col-10.py-3.rounded-right.cfm-player-info').attr('class', 'col-12 py-3 rounded-right cfm-player-info');
$("div#tmpg .table-responsive").appendTo("#tmpg");
$(".col-12.py-3.rounded-right.cfm-player-info").appendTo(".col-12.d-flex.align-items-left.justify-content-center.cfm-player-team-logo");
$(".col-1.d-flex.align-items-left.justify-content-center.cfm-player-logo").appendTo(".col-12.d-flex.align-items-left.justify-content-center.cfm-player-team-logo");
$('.col-1.d-flex.align-items-left.justify-content-center.cfm-player-logo').attr('class', 'col-4 d-flex align-items-left justify-content-center cfm-player-logo  ');
$( ".card-footer.text-center.cfm-player-attribute" ).wrap( "<div class='att-snapshot'>Attribute Snapshot <em class='fa fa-chevron-circle-down'></em></div>" );
$(".card-footer.text-center.cfm-player-attribute").hide();
    $(".att-snapshot").on("click", function(){
        $(".card-footer.text-center.cfm-player-attribute").fadeToggle('slow');
});
$(".col-4.d-flex.align-items-left.justify-content-center.cfm-player-logo img.rounded-circle.thumb128").unwrap();


/*Team Page****/
$( '.col-10.py-3.rounded-right.cfm-team-info').attr('class', 'col-12 py-3 rounded-right cfm-team-info');
$(' .col-2.d-flex.align-items-left.justify-content-center.cfm-team-logo').attr('class', 'col-12 d-flex align-items-left justify-content-center cfm-team-logo  ');
$(' .col-xl-10.col-lg-6.col-md-12.pt-2').attr('class', 'col-xl-12 col-lg-12 col-md-12 pt-2 ');
$('.col-xl-12.col-lg-6.col-md-12').attr('class', 'col-xl-12 col-lg-12 col-md-12 ');
$('.col-xl-12.col-lg-12.col-md-12 .card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors').attr('id', 'tmpg');
$(" ul.nav.nav-tabs").appendTo(".col-12.py-3.rounded-right.cfm-team-info  ");
$(" .col-md-6.col-xs-6.col-sm-6 .card").appendTo(".col-12.py-3.rounded-right.cfm-team-info");
$(".card.card-madden-team").appendTo(".col-12.py-3.rounded-right.cfm-team-info");
 $('table.dl-table1.madden-team-table').appendTo(".col-12.py-3.rounded-right.cfm-team-info");
$(" .col-xl-12.col-lg-12.col-md-12.pt-2").appendTo("div#tmpg .col-12.py-3.rounded-right.cfm-team-info");

/*front-office***/
$("div#frontoffice_wrapper").attr('class', 'col-12 frontoffice_wrapper');

/*pow***/
$(".oplayeroftheweek .col-4.d-flex.align-items-center.justify-content-center.rounded-left	").attr('class', 'oplayeroftheweek col-12 d-flex align-items-center justify-content-center rounded-left');
$(".oplayeroftheweek .col-8.py-2.pl-0").attr('class', 'oplayeroftheweek col-12 py-2 pl-0');
$(".dplayeroftheweek .col-4.d-flex.align-items-center.justify-content-center.rounded-left	").attr('class', 'dplayeroftheweek col-12 d-flex align-items-center justify-content-center rounded-left');
$(".dplayeroftheweek .col-8.py-2.pl-0").attr('class', 'dplayeroftheweek  col-12 py-2 pl-0');
$("img.rounded-circle.thumb24").unwrap();

/*Player search page***/
 $('table.data-table2').attr('class', 'responsive');
$( ".row" ).wrap( "<div class='col-xl-10'></div>" );
$('ul.players-add-filter.dropdown-menu.show').attr('class', 'dropdown-menu');
$("legend").appendTo(".col-xl-10 .row .col-12 .card.card-default .card-body");
$( "legend" ).wrap( "<div class='legendtwo'>Player Search <em class='fa fa-chevron-circle-down'></em></div>" );
$("form.form-horizontal").hide();
    $(".legendtwo").on("click", function(){
        $("form.form-horizontal").fadeToggle('slow');
});


$("#slideshow > div:gt(0)").hide();

var buttons = "<button class=\"slidebtn prev\"><i class=\"fa fa-chevron-circle-left\"></i></button><button class=\"slidebtn next\"><i class=\"fa fa-chevron-circle-right\"></i></button\>";

var slidesl = $('.slideitem').length
var d = "<li class=\"dot active-dot\">•</li>";
for (var i = 1; i < slidesl; i++) {
  d = d+"<li class=\"dot\">•</li>";
}	
var dots = "<ul class=\"slider-dots\">" + d + "</ul\>";

$("#slideshow").append(dots).append(buttons);
var interval = setInterval(slide, 8000);

function intslide(func) {
	if (func == 'start') { 
 	interval = setInterval(slide, 8000);
	} else {
		clearInterval(interval);		
		}
}

function slide() {
		sact('next', 0, 1200);
}
	
function sact(a, ix, it) {
        var currentSlide = $('.current');
        var nextSlide = currentSlide.next('.slideitem');
        var prevSlide = currentSlide.prev('.slideitem');
		    var reqSlide = $('.slideitem').eq(ix);

		    var currentDot = $('.active-dot');
    	  var nextDot = currentDot.next();
    	  var prevDot = currentDot.prev();
		    var reqDot = $('.dot').eq(ix);
		
        if (nextSlide.length == 0) {
      		nextDot = $('.dot').first();
            nextSlide = $('.slideitem').first();
            }

        if (prevSlide.length == 0) {
      		prevDot = $('.dot').last();
            prevSlide = $('.slideitem').last();
            }
			
		if (a == 'next') {
			var Slide = nextSlide;
			var Dot = nextDot;
			}
			else if (a == 'prev') {
				var Slide = prevSlide;
				var Dot = prevDot;
				}
				else {
					var Slide = reqSlide;
					var Dot = reqDot;
					}

        currentSlide.fadeOut(it).removeClass('current');
        Slide.fadeIn(it).addClass('current');
		
    	currentDot.removeClass('active-dot');
    	Dot.addClass('active-dot');
}	

$('.next').on('click', function(){
		intslide('stop');						
		sact('next', 0, 200);
		intslide('start');						
	});//next

$('.prev').on('click', function(){
		intslide('stop');						
		sact('prev', 0, -200);
		intslide('start');						
	});//prev

$('.dot').on('click', function(){
		intslide('stop');
		var index  = $(this).index();
		sact('dot', index, 400);
		intslide('start');						
	});



 $('div#hp-stories').attr('class', 'slideshow');
  $('.blogpost.clearfix').attr('class', 'slideitem current');
   $('.blogpostbody').attr('class', 'info');
    $('img.blogpostimage').attr('class', 'img');
      $('  div#hp-stories h4').attr('class', '.carousel-caption h3');

  $("#slideshow > div:gt(0)").hide();



