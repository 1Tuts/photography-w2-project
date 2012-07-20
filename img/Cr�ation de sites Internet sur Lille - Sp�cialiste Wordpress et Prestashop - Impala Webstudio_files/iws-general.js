/*
-----------------------------------------------------------------------------------------
SCRIPT GENERAL 
-----------------------------------------------------------------------------------------
Email: contact@impala-webstudio.fr

-----------------------------------------------------------------------------------------
*/
//<![CDATA[

function imgFade(){
	$('img').fadeIn();
}

$(document).ready(function(){	
	/*pseudo pr�chargement*///setTimeout("$('#Veil').fadeOut(2000);",1000);
	
	/* GLOBAL : affichage images progressif */
	imgFade();
	
	/* GLOBAL : Retour haut de page*/
	$('.GoTop').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});	
	
	/* inscription newsletter footer*/
	/*if($("#inscription_newsletter_email")	){
		$("#inscription_newsletter_email").focus(function(){this.value = ''});
		$("#inscription_newsletter_email").blur(function(){
			if(this.value == '') this.value = 'Votre email ici';
		});
	} */
	
	/* HOME */
	if($('.HOME')){	
	$('.Fade').hover(
		function(){
			$(this).fadeTo('fast', 0.7);
		},
		function() {
			$(this).fadeTo('slow', 1);
		});	
		if($('#slider')){
			$('#slider').nivoSlider({
					effect:'fold', //Specify sets like: 'fold,fade,sliceDown'
					slices:15,
					animSpeed:1000, //Slide transition speed
					pauseTime:6000,
					directionNav:false, //Next & Prev
					controlNav:true, //1,2,3...
					controlNavThumbs:false, //Use thumbnails for Control Nav
					keyboardNav:true, //Use left & right arrows
					pauseOnHover:true, //Stop animation while hovering
					captionOpacity:0.9 //Universal caption opacity
				});
		}
	}	
	
	/* PORTFOLIO : Blocs R�alisation */
	if($('.PORTFOLIO')){			
		var currentCat = 'Ref_SitesInternet';//premi�re cat�gorie affich�e
		$(".realisation").hide();	//masque toutes les r�alisations
		function Draw(num){
				var nbRea = $("."+currentCat+" .realisation").size();
				if (num<=nbRea){//pour chaque r�alisation de la cat�gorie courante...
					//calcule la hauteur du conteneur selon le nb de r�a...
					var hauteurConteneur = 300*(Math.ceil(nbRea/2));
					$(".Categories").animate({height: hauteurConteneur}, 500);//...agrandit ou r�duit le conteneur selon (animation)
					$("."+currentCat+" .realisation:eq("+num+")").delay(400*num).fadeIn(1000);
					Draw(num+1);
				}
			}
			Draw(0);
		
		$(".realisation").not('.enCours, .noLink').hover(
		function(){
			$(this).addClass('Over');
			jQuery(".plusOver", this).stop(true,true).fadeIn();
		},
		function() {
			$(this).removeClass('Over');
			jQuery(".plusOver", this).stop(true,true).fadeOut();
		});
		
		$(".LiensCategories > a").click(function(){			
				$(".realisation").hide();					
					$(".LiensCategories > a").removeClass('selected');
					$(this).addClass('selected');
					$(".Categorie").hide();
					var cat = 'Ref_'+$(this).attr('id');
					$("."+cat).fadeIn();
					currentCat = cat;//r�cup�re class du div courant
					Draw(0);	
			})
	}
	
	/* bloc recherche BLOG */
	if($(".BLOG")	){
		if($("#s").attr("value") == '') {
			$("#s").attr("value","Rechercher sur le blog");
		};
		$("#s").focus(function(){
				this.value='';
		});
		$("#s").blur(function(){	
			if(this.value=='') {
				this.value="Rechercher sur le blog";
			};
		});
	} 
	
	/* STUDIO : page Equipe  */
	if($(".Equipe")){
		window.cur = 0;
			var step = $('#p_Benjamin').outerWidth();//r�cup�re largeur d'une fiche : 960
			var Prenoms = new Array('Benjamin','Samuel','Emeline','Baptiste');
			$('.Profil').css({left:step});//positionne les fiches hors cadre, � droite
			
			var affProfil = function() {//affiche profil depuis fiche selection
				if($(this).hasClass('click'+Prenoms[0])){window.cur = 0; }
				if($(this).hasClass('click'+Prenoms[1])){window.cur = 1; }
				if($(this).hasClass('click'+Prenoms[2])){window.cur = 2; }
				if($(this).hasClass('click'+Prenoms[3])){window.cur = 3; }
				$('#photoEquipe').animate({left:-step}, 'slow');//fiche selection sort � gauche			
				$('#p_'+Prenoms[window.cur]).animate({left:0}, 'slow', function(){//fiche s�lectionn�e entre par la droite
					for(var i=0; i<Prenoms.length; i++){
						var f = '#p_'+Prenoms[i];//fiche
						var fs = '#p_'+Prenoms[window.cur];//fiche selectionnee
						var pos = step*(i-window.cur);//position cible
						if(pos<0){pos=-step};
						if(pos>step){pos=step};
						$(f).not(fs).css({left:pos,'display':'block'});//positionne les autres fiches sur le(s) c�t�(s)
					}
				});			
			}
			//�v�nements page selection
			$('.clickBenjamin').click(affProfil);
			$('.clickSamuel').click(affProfil);
			$('.clickEmeline').click(affProfil);
			$('.clickBaptiste').click(affProfil);	
			
			//survol photo
			if(!$.browser.msie){
				$('.overPhoto').hover(function() {
					var cible = $(this).attr('name');
					//alert(cible);					
					$('.photoID'+cible).fadeTo('fast', 0.6);		
					$('.Acces'+cible).fadeTo('fast', 0.6);
					//$('.photoID'+cible).addClass('Survol');
				},
				function() {
					var cible = $(this).attr('name');					
					$('.photoID'+cible).fadeTo('slow', 1);	
					$('.Acces'+cible).fadeTo('slow', 1);
					//$('.photoID'+cible).removeClass('Survol');
			});
			}
			
					
			var navProfil = function() {//navigue entre les fiches
				if($(this).attr('rel') == 'clickPrevious'){			
					$('#p_'+Prenoms[window.cur]).animate({left:step}, 'slow');	
					$('#p_'+Prenoms[window.cur-1]).animate({left:0}, 'slow');
					window.cur-=1;				
				}
				if($(this).attr('rel') == 'clickNext'){
					$('#p_'+Prenoms[window.cur]).animate({left:-step}, 'slow');
					$('#p_'+Prenoms[window.cur+1]).animate({left:0}, 'slow');
					window.cur+=1;
				}				
			}			
			$('.clickPrevious').click(navProfil);
			$('.clickNext').click(navProfil);	
			
			$('.bt_close').click(function(){
				$('#photoEquipe').css({left:0});
				$('#p_'+Prenoms[window.cur]).fadeOut(500, function(){
						for(var i=0; i<Prenoms.length; i++){
							$('#p_'+Prenoms[i]).css({left:step,'display':'block'});
						}					
				});				
			});
	}
		 
	//Examples of how to assign the ColorBox event to elements
	//$(".example1").colorbox({iframe:true, innerWidth:425, innerHeight:344});
	//$(".example2").colorbox({width:"50%", inline:true, href:"#inline_example1"});
	//$("a[rel='example3']").colorbox();
	//$("a[rel='example4']").colorbox({transition:"fade"});
	
});	  
//]]>

//<![CDATA[
/*$(document).ready(function(){
	$("#featured > ul").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 5000, true);
});*/	   
//]]>

//<![CDATA[
/*$(document).ready(function()
{
  //hide the all of the element with class msg_body
  $(".toggle-content").hide();
  //toggle the componenet with class msg_body
  $(".toggle").click(function()
  {
    $(this).next(".toggle-content").slideToggle('fast');
  });
});*/
//]]>


