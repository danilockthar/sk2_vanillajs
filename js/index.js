    $(document).ready(function(){
        /*-/ waitForImages analiza si hay imagenes por cargar /-*/
        $('.root').waitForImages({
        finished: function() {
            /*-/ finished aplica cuando todas las imagenes del selector estan cargadas /-*/
            console.log("Todas las imagenes cargadas correctamente");
        },
        each: function(loaded, count) {
            /*-/ si las cargadas dividio la cantidad es de 1/3 saco el loader de pantalla /-*/
            if (loaded / count > .3) {
                //$("#logoloader").css("display", "none");
                $("#loader").css("display", "none");
                $(".work").fadeOut(1500);
            }
        },
        waitForAll: true
        });
    })
    
        $(function(){
    /*-/ Creo una instancia de History para manejar las url y el contenido /-*/
	var History = window.History;
	
	if (History.enabled) {
	    var slug = get_url_value('slug');
		var page = get_url_value('page');
		var slugpath = slug ? slug : 'home';
		var path = page ? page : 'home';
        /*if(path == 'home'){
            console.log("home");
        }else{
            load_page_content(path); 
        }*/
		load_page_content(path, slugpath ); 
	} else {
		return false;
	}
	// Content update and back/forward button handler
	History.Adapter.bind(window, 'statechange', function() {
		var State = History.getState();	
		// Do ajax
		var slug = get_url_value('slug');
		load_page_content(State.data.path, slug.toUpperCase() );
		// Log the history object to your browser's console
		// History.log(State);
    });
    
    /*-/ creo funcion para convertir la primera letra de un string a upperCase /-*/
    String.prototype.capitalize = function() {
        return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
    };
     /*-/ Hover en los proyectos muestra el nombre del proyecto y ejecuta el hover effect image    /-*/
    $(".proyecto-cajas").on("mouseenter", function(){
        $(".allspan").css("display", "none");
        $(this).find('span').css("display", "block");
        var spanelem = "#"+ $(this).find('span').attr("data-id");
         /*-/  creo una instancia de anime.js   /-*/
        var animation = anime.timeline({});
        animation
        .add({
            targets: spanelem,
            translateY: [40, 0],
            translateX: [-10, 0],
            easing: 'easeOutQuart',
            opacity: 1,
            delay: anime.stagger(100, {start: 10}),
            duration:500
        });
    });
    // Navigation link handler
    /*-/  Click en menu del navbar hace un history pushstate y carga el contenido solicitado   /-*/
    $("#menuspan a").on("click", function(e){
        if(e.which == 1 || e.which == 2){
            e.preventDefault();
        }
        var datos = {};
        datos.nombre = $(this).attr("data-page");
        History.pushState({path: datos.nombre}, datos.nombre.capitalize(), './?page=' + datos.nombre + '&slug=' + datos.nombre); // When we do this, History.Adapter will also execute its contents. 		
    });
     /*-/ click logo envia a home    /-*/
     $("#logospan").on("click",function(){
        var datos = {};
        datos.nombre = "home";
        History.pushState({path: datos.nombre}, datos.nombre.capitalize(), './?page=' + datos.nombre + '&slug=' + datos.nombre); // When we do this, History.Adapter will also execute its contents. 		
    }); 
         /*-/ Home Carousel Navigation Handler     /-*/
    $(".home-ver-proyecto-btn").on("click", function(){
        var datos = {};
        datos.nombre = $(this).attr("data-page");
        datos.id = $(this).attr("data-id");
        History.pushState({path: datos.id}, datos.id, './?page=' + datos.id + '&slug=' + datos.nombre); // When we do this, History.Adapter will also execute its contents. 		
    });
    $(".area_nav_menu_bloques span").on("click", function(e){
        e.preventDefault();
        var datos = {};
        datos.nombre = $(this).attr("data-page");
        History.pushState({path: datos.nombre}, datos.nombre.capitalize(), './?page=' + datos.nombre + '&slug=' + datos.nombre); // When we do this, History.Adapter will also execute its contents. 		
    });
    /*-/ VER TODOS DESARROLLOS   /-*/
    $(".home-last-work-button").on("click", function(e){
        if(e.which == 1 || e.which == 2){
            e.preventDefault();
        }
        var datos = {};
        datos.nombre = $(this).attr("data-page");
        History.pushState({path: datos.nombre}, datos.nombre.capitalize(), './?page=' + datos.nombre + '&slug=' + datos.nombre); // When we do this, History.Adapter will also execute its contents. 		
    });
        
    $(".proyecto-cajas").on("click", function(e){
        if(e.which == 1 || e.which == 2){
            e.preventDefault();
        }
        var datos = {};
        datos.nombre = $(this).attr("data-page");
        datos.id = $(this).attr("data-id");
        History.pushState({path: datos.id}, datos.id, './?page=' + datos.id + '&slug=' + datos.nombre); // When we do this, History.Adapter will also execute its contents. 		
    });
    
    // Con esta funcion cargo el contenido correspondiente a cada pagina //
	function load_page_content(page, slug) {
	   
	     /*-/ Cambio el titulo del sitio segun contenido /-*/
	    $(document).prop('title', 'SK2 - ' + slug.toUpperCase());
	    var swiper = new Swiper('.swiper-container', {
	        effect: 'fade',
	        autoplay: {
            delay: 5000,
          },
           pagination: {
              el: '.swiper-pagination',
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          slidesPerView: 1,
          paginationClickable: true,
          spaceBetween: 30
        });
	    Array.from(document.querySelectorAll('.proyecto-hover')).forEach((el) => {
			const imgs = Array.from(el.querySelectorAll('img'));
			if($(el).find("canvas").length < 1){
			    new hoverEffect({
    				parent: el,
    				intensity: el.dataset.intensity || undefined,
    				speedIn: el.dataset.speedin || undefined,
    				speedOut: el.dataset.speedout || undefined,
    				easing: el.dataset.easing || undefined,
    				hover: el.dataset.hover || undefined,
    				image1: imgs[0].dataset.src,
    				image2: imgs[1].dataset.src2,
    				displacementImage: el.dataset.displacement
			    });
    		}
    	});
        if(page == "home" || page == "desarrollos" || page == "contacto" || page == "about"){
            var transitionTimer = setTimeout(function(){
                $(".main-bloques").css("display", "none");
                $("#main-" + page).css("display", "block");
                if(page == 'contacto'){
                    var animation = anime.timeline({});
    
                animation
                .add({
                    targets: '',
                    easing: 'easeOutQuart',
                    duration:600,
                    complete:function(){
                       var timer = setTimeout(function(){
                            $(".nombre-form input").focus();
                        }, 500);
                    }
                })
                .add({
                    targets: '.form-contacto span h2',
                    translateY: [-100, 0],
                    easing: 'easeOutQuart',
                    opacity: [0, 1],
                    delay: anime.stagger(100, {start: 10}),
                    duration:800
                })
                .add({
                    targets: '.form-contacto .inputsforma',
                    translateX: [-100, 0],
                    easing: 'easeOutQuart',
                    opacity: [0, 1],
                    delay: anime.stagger(100, {start: 10}),
                    duration:800
                })
                .add({
                    targets: '.btn-form-contacto',
                    translateY: [50, 0],
                    easing: 'easeOutQuart',
                    opacity: [0, 1],
                    delay: anime.stagger(100, {start: 10}),
                    duration:400
                })
                
                $(".form-contacto input").on("focus", function(){
                    var parent = $(this).parent();
                    //parent.css("border", "1px solid blue");
                });
                $(".form-contacto input").on("focusout", function(){
                    var parent = $(this).parent();
                   // parent.css("border", "1px solid #181818");
                });
                $(".form-contacto textarea").on("focus", function(){
                    var parent = $(this).parent();
                    //parent.css("border", "1px solid blue");
                });
                $(".form-contacto textarea").on("focusout", function(){
                    var parent = $(this).parent();
                    //parent.css("border", "1px solid #181818");
                });
                }
                $(window).scrollTop(0);
            },50);
        }else{
            $("#loader").css("display", "block");
            switch(page){
                case 'proyectos':
                    // $.get("https://broeders.com.ar/contacto/wp-json/wp/v2/proyectos", function(data){
                    //     console.log(data);
                    //     repartir_data(page, data);
                    //     $(".area")
                    //       .waitForImages({ 
                    //           each: function( loaded, count ) { 
                    //                 if (loaded / count == 1) {
                    //                     $("#loader").css("display", "none");
                    //                     $(".area").css("opacity", "1");
                    //                 }
                    //           } 
                    //       });
                        
                    // });
                    break;
                    /*-/ Como case proyecto esta descontinuado siempre entra en default /-*/
                    default:
                    /*-/ Limpio la pagina antes de cargar los datos del proyecto /-*/
                    $("#main-id-desarrollo").html("");
                    $(".main-bloques").css("display", "none");
                    $("#main-id-desarrollo").css("display", "block");
                    /*-/ Hago un Get a wp-json instalado /-*/
                    $.get("https://broeders.com.ar/contacto/wp-json/wp/v2/proyectos/"+ page, function(data){
                        /*-/ repartir_data se encarga de generar el html por javascript e insertarlo en main-id-desarrollo (solo para desarrollos ) /-*/
                        repartir_data(page, data);
                        /*-/ quito el loader /-*/
                        $("#loader").css("display", "none");
                        /*-/ llevo el scrollbar al inicio /-*/
                        $(window).scrollTop(0);
                    });
                break;
            }
        }
	}
	/*-/ Tomo la url de la variable especificada /-*/
	function get_url_value(variable) {
	   var query = window.location.search.substring(1);
	   var vars = query.split("&");
	   for (var i=0;i<vars.length;i++) {
			   var pair = vars[i].split("=");
			   if(pair[0] == variable){return pair[1];}
	   }
	   return(false);
    }
    // -------------------- // -------------------
       
    /*-/ Se encarga de crear el html correspondiente a proyectos o desarrollos e inyectarlo al html /-*/   
    const repartir_data = (name, data) => {
       var html = "";
       switch (name) {
            case "proyectos":
                /*-/ DESCONTINUADO : PROYECTOS O DESARROLLOS INICIA EN SU PROPIO ARCHIVO INCLUIDI EN EL INDEX /-*/
                for(val of data){
                    html += `${val.acf.image2 ? 
                                `<div class="proyecto-cajas proyecto-hover" data-page="${val.slug}" data-id="${val.id}" data-displacement="img/1.jpg">
                                    <img style="display:none;" src="${val.acf.image.sizes.medium_large}">
                                    <img style="display:none;" src="${val.acf.image2.sizes.medium_large}">
                                    <span class="allspan" id="${val.slug}" data-id="${val.slug}"style="color:black;opacity:0;" class="proyecto_cajas_title"> ${val.title.rendered} 
                                    </span>
                                </div>` 
                            : `<div class="proyecto-cajas" data-page="${val.slug}" data-id="${val.id}"  style="background-image:url(${val.acf.image.sizes.medium_large});background-size:cover;">
                                    <span class="allspan" id="${val.slug}" data-id="${val.slug}"style="color:black;opacity:0;" class="proyecto_cajas_title"> ${val.title.rendered} </span>
                                </div>`}
                            `;
                }
                $(".area").html(`<div id="proyecto-root">`+html+`</div>`);
                var thisproyect = $(this).find("proyecto_cajas_title");
                
    			Array.from(document.querySelectorAll('.proyecto-hover')).forEach((el) => {
    				const imgs = Array.from(el.querySelectorAll('img'));
    				new hoverEffect({
    					parent: el,
    					intensity: el.dataset.intensity || undefined,
    					speedIn: el.dataset.speedin || undefined,
    					speedOut: el.dataset.speedout || undefined,
    					easing: el.dataset.easing || undefined,
    					hover: el.dataset.hover || undefined,
    					image1: imgs[0].getAttribute('src'),
    					image2: imgs[1].getAttribute('src'),
    					displacementImage: el.dataset.displacement
    				});
    			});

                    
                $(".proyecto-cajas").on("mouseenter", function(){
                    $(".allspan").css("display", "none");
                    $(this).find('span').css("display", "block");
                    var spanelem = "#"+ $(this).find('span').attr("data-id");
                    var animation = anime.timeline({
                    });
                    animation
                    .add({
                        targets: spanelem,
                        translateY: [-50, 0],
                        easing: 'easeOutQuart',
                        opacity: 1,
                        delay: anime.stagger(100, {start: 10}),
                        duration:500
                    });
                });
                $('.root').on("mouseenter", function(){
                    var animation = anime.timeline({
                    });
                    animation
                    .add({
                        targets: '.allspan',
                        translateY: [0, -50],
                        easing: 'easeOutQuart',
                        opacity: 0,
                        delay: anime.stagger(100, {start: 10}),
                        duration: 300
                    });
                })
               /*$(".proyecto-cajas").on("mouseleave", function(){
                    var spanelem = "#"+ $(this).find('span').attr("data-id");
                    var animation = anime.timeline({
                    });
                    animation
                    .add({
                        targets: spanelem,
                        translateY: [0, -50],
                        easing: 'easeOutQuart',
                        opacity: 0,
                        delay: anime.stagger(100, {start: 10}),
                        duration: 300
                    });
                });*/

                $(".proyecto-cajas").on("click", function(){
                    var datos = {};
                    datos.nombre = $(this).attr("data-page");
                    datos.id = $(this).attr("data-id");
                    History.pushState({path: datos.id}, datos.id, './?page=' + datos.id + '&slug=' + datos.nombre); // When we do this, History.Adapter will also execute its contents. 		

                });
            break;
            default:
            /*-/ Siempre entra en default ya que carga el template de cada proyecto elegido por id /-*/
                html = `       
                        <div class="area_nav_menu">
                            <div class="navmap">
                                <span data-page="home"> INICIO</span>
                                <p> / </p>
                                <span data-page="desarrollos"> DESARROLLOS </span>
                                <p> / </p>
                                <span style="color:#333 !important;font-weight:700 !important"> ${data.title.rendered.toUpperCase()} </span>
                            </div>
                            <div style="width:100%;height:5px;background:black;"> </div>
                        </div>
                        <div class="proyecto_unico">
                            <div class="proyecto_swiper" style="text-align:center;">
                                ${data.acf.image ? 
                                    `<img class="img_acf_principal" src="${data.acf.image.sizes.medium_large}">` 
                                : ''}
                                <div class="owl-carousel">
                                    ${data.acf.image ? 
                                        `<div> <img class="img_acf_carousel" data-image="${data.acf.image.sizes.medium_large}" src="${data.acf.image.sizes.medium_large}"> </div>` 
                                    : ''}
                                     ${data.acf.image2 ? 
                                        `<div>  <img class="img_acf_carousel" data-image="${data.acf.image2.sizes.medium_large}" src="${data.acf.image2.sizes.medium_large}"> </div>` 
                                    : ''}
                                    ${data.acf.image3 ? 
                                        `<div> <img class="img_acf_carousel" data-image="${data.acf.image3.sizes.medium_large}" src="${data.acf.image3.sizes.medium_large}"> </div>` 
                                    : ''}
                                    ${data.acf.image4 ? 
                                        `<div> <img class="img_acf_carousel" data-image="${data.acf.image4.sizes.medium_large}" src="${data.acf.image4.sizes.medium_large}"> </div>` 
                                    : ''}
                                </div>
                            </div>
                            <div class="proyecto_unico_info">
                                <h1 class"proyecto_unico_title">${data.title.rendered.toUpperCase()}</h1>
                                ${data.content.rendered}
                            </div>
                        </div>
                        <div class="area_bottom_proyecto">
                            <div style="width:100%;height:5px;background:black;"> </div>
                            ${data.acf.latitud && data.acf.longitud !== '' ? 
                                `<div id="mapId"></div>` 
                            : ''}
                        </div>
                    `;
                    /*-/ Inyecto el template al html /-*/
                    $("#main-id-desarrollo").html(html);
                    /*-/ Inicio el mini carousel /-*/
                    $(".owl-carousel").owlCarousel({
                         loop: false,
                         margin: 10,
                         nav:true
                    });
                    /*-/ Menu de arriba del proyecto Handling  /-*/
                    $(".area_nav_menu span").on("click", function(e){
                        e.preventDefault();
                        var datos = {};
                        datos.nombre = $(this).attr("data-page");
                        History.pushState({path: datos.nombre}, datos.nombre.capitalize(), './?page=' + datos.nombre + '&slug=' + datos.nombre); // When we do this, History.Adapter will also execute its contents. 		
                    });
                    
                    /*-/ Clickeo imagen del carousel y cambio el src de la img_acg_principal /-*/
                    $(".img_acf_carousel").on("click", function(){
                         var thisimgurl = $(this).attr("data-image");
                         $(".img_acf_principal").attr("src", thisimgurl);
                    });
                      
                     /* IF LATITUD & LONGITUD AGREGAMOS EL MAPA DE LEAFLET*/
                    if(data.acf.latitud && data.acf.longitud !== ""){
                        var lat = data.acf.latitud;
                        var long = data.acf.longitud;
                        var mymap = L.map('mapId');
                        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                            maxZoom: 18,
                            zoom: 16,
                            id: 'mapbox/streets-v11',
                            tileSize: 512,
                            zoomOffset: -1,
                            accessToken: 'pk.eyJ1IjoiZGFuaWxvY2t0aGFyIiwiYSI6ImNrNnRoaTYwbDBpN2szZm9nZ3o2bWRweHgifQ.7uuAmAjwb4OFv50g2GvMQg'
                        }).addTo(mymap);
                        var marker = L.marker([lat, long]).addTo(mymap);
                        mymap.setView([lat, long], 16);
                        mymap.scrollWheelZoom.disable()
                    }
                break;
           }
       }
        /*-/ On sroll achico el logo y el navbar /-*/
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            if(scroll >= 50){
                $("#logospan").css("width", "145px");
            }else{
                $("#logospan").css("width", "190px");
            }
        });
        /* CODIGO PARA MOSTRAR EL MININAV  */
        
        /* CODIGO PARA EJECUTAR EL MININAV  */
        
        var globalnavflag = false;
        var isAnimating = false;
        $(".menuwebnav span").on("click", function(e){
            e.preventDefault();
            var datos = {};
            datos.nombre = $(this).attr("data-page");
            var animation = anime.timeline({});
            if(globalnavflag){
                 if(!isAnimating){
                    animation
                    .add({
                        targets: '.menuwebnav span',
                        translateY: [0, -100],
                        easing: 'easeOutQuart',
                        opacity: [1, 0],
                        zIndex: [80, -100],
                        delay: anime.stagger(100, {start: 10}),
                        duration:800,
                        begin: function(){
                            isAnimating = true;
                        },
                         complete:function(){
                            $(".menuwebnav span").css("pointer-events", "none");
                        }
                    })
                    .add({
                        targets: '',
                        easing: 'easeOutQuart',
                        duration:100,
                        complete:function(){
                           $(".menuwebnav").css("height", "100%");
                        }
                    })
                     .add({
                        targets: '',
                        easing: 'easeOutQuart',
                        duration:100,
                        complete:function(){
                           $(".menuwebnav").css("width", "0%");
                           $(".menuwebnav").css("z-index", "-100");
                           var timer = setTimeout(function(){
                               isAnimating = false;
                               
                                History.pushState({path: datos.nombre}, datos.nombre.capitalize(), './?page=' + datos.nombre + '&slug=' + datos.nombre); // When we do this, History.Adapter will also execute its contents.
                           }, 100)
                        }
                    })
                    globalnavflag = false;
                }
            }
             		
        });
        $(".webnav-img-container").on("click", function(){
            var animation = anime.timeline({});
                if(!globalnavflag){
                    if(!isAnimating){
                        animation
                        .add({
                            targets: '',
                            easing: 'easeOutQuart',
                            duration:400,
                            begin: function(){
                                isAnimating = true
                                $(".menuwebnav").css("z-index", "90");
                            },
                            complete:function(){
                               $(".menuwebnav").css("width", "50%");
                            }
                        })
                         .add({
                            targets: '',
                            easing: 'easeOutQuart',
                            duration:400,
                            complete:function(){
                               $(".menuwebnav").css("height", "300%");
                            }
                        })
                        .add({
                            targets: '.menuwebnav span',
                            translateY: [-100, 0],
                            easing: 'easeOutQuart',
                            opacity: [0, 1],
                            zIndex: [-100, 80],
                            delay: anime.stagger(100, {start: 10}),
                            duration:800,
                            begin:function(){
                                $(".menuwebnav span").css("pointer-events", "auto");
                            },
                            complete: function(){
                                isAnimating = false;
                            }
                        })
                        globalnavflag = true;
                    }
            }else{
                if(!isAnimating){
                    animation
                    .add({
                        targets: '.menuwebnav span',
                        translateY: [0, -100],
                        easing: 'easeOutQuart',
                        opacity: [1, 0],
                        zIndex: [80, -100],
                        delay: anime.stagger(100, {start: 10}),
                        duration:800,
                        begin: function(){
                            isAnimating = true;
                        },
                         complete:function(){
                            $(".menuwebnav span").css("pointer-events", "none");
                        }
                    })
                    .add({
                        targets: '',
                        easing: 'easeOutQuart',
                        duration:100,
                        complete:function(){
                           $(".menuwebnav").css("height", "100%");
                        }
                    })
                     .add({
                        targets: '',
                        easing: 'easeOutQuart',
                        duration:100,
                        complete:function(){
                           $(".menuwebnav").css("width", "0%");
                           $(".menuwebnav").css("z-index", "-100");
                           var timer = setTimeout(function(){
                               
                               isAnimating = false;
                           }, 500)
                        }
                    })
                    globalnavflag = false;
                }
            }
            
        })
        
        /* CODIGO PARA EJECUTAR EL MININAV  */
});
