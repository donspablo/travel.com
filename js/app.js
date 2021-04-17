<!-- create docReady event -->
function addEvent(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,function(){return n.call(e,window.event)})}function log(e){function t(e){var t=document.getElementById("log"),n=document.createElement("div");n.appendChild(document.createTextNode(e)),t.appendChild(n)}loaded?t(e):logs.push(e),eventSet||(eventSet=!0,addEvent(window,"load",function(){loaded=!0;for(var e=0;e<logs.length;e++)t(logs[e]);logs=[]}))}var logs=[],eventSet=!1,loaded=!1;!function(e,t){function n(){if(!a){a=!0;for(var e=0;e<o.length;e++)o[e].fn.call(window,o[e].ctx);o=[]}}function d(){"complete"===document.readyState&&n()}e=e||"docReady",t=t||window;var o=[],a=!1,c=!1;t[e]=function(e,t){return a?void setTimeout(function(){e(t)},1):(o.push({fn:e,ctx:t}),void("complete"===document.readyState?setTimeout(n,1):c||(document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):(document.attachEvent("onreadystatechange",d),window.attachEvent("onload",n)),c=!0)))}}("docReady",window);
<!-- create docReady event end -->


    <!-- set cookies and marker objects -->
    window.cookies= function(){var e,t,n;return n=function(e){return new RegExp("(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*")},t=function(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=")},e=/^(?:expires|max\-age|path|domain|secure)$/,{get:function(e){return e&&this.has(e)?unescape(document.cookie.replace(n(e),"$1")):null},set:function(t,n,r,s,a,c){var i;if(t&&!e.test(t)){if(i="",r)switch(typeof r){case"number":i="; max-age="+r;break;case"string":i="unlimited"===r?"; expires=Fri, 10 Jul 2099 13:05:42 UTC":"; expires="+r;break;case"object":r.hasOwnProperty("toGMTString")&&(i="; expires="+r.toGMTString())}document.cookie=escape(t)+"="+escape(n)+i+(a?"; domain="+a:"")+(s?"; path="+s:"")+(c?"; secure":"")}},remove:function(e){var t;e&&this.has(e)&&(t=new Date,t.setDate(t.getDate()-100),document.cookie=escape(e)+"=; expires="+t.toGMTString()+"; path=/")},has:function(e){return t(e).test(document.cookie)},object:function(e){var t;if(e&&this.has(e))return t=this.get(e),new Function("return "+unescape(t.replace(/\+/g," ")))()}}}();
    window.Marker = {
        default_marker: set_marker,
        get: function()
        {
            if( set_cookies == true ){
                return cookies.get('marker');
            } else {
                return set_marker;
            }

        },
        set: function(value)
        {
            domain = window.location.hostname;
            expire = new Date(+(new Date) + 60 * 60 * 24 * 30 * 1e3);
            cookies.set('marker', value, expire.toGMTString(), '/', domain);
            return value;
        },
        handle_marker: function(value)
        {
            if (value && this._new_marker(value) && (this.is_affiliate(value) || !this.is_affiliate(this.get())))
            {
                return this.set(value);
            }
            if (!this.get())
            {
                return this.set(this.default_marker);
            }
            return this.get();
        },
        _new_marker: function(value)
        {
            return value !== this.get();
        },
        get_from_params: function()
        {
            var a, b, i, p;
            a = window.location.search.substr(1).split('&');
            if (a === "")
            {
                return {};
            }
            b = {};
            i = 0;
            while (i < a.length)
            {
                p = a[i].split("=", 2);
                if (p.length === 1)
                {
                    b[p[0]] = "";
                }
                else
                {
                    b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
                }
                ++i;
            }
            return b.marker;
        },
        get_marker: function()
        {
            if (this.get_from_params() != null)
            {
                this.set(this.get_from_params())
            }
            if (this.get() == null)
            {
                this.set(this.default_marker);
            }
            return this.get() || this.default_marker;
        }
    };
    <!-- set cookies and marker objects end -->

    if ( set_cookies == true ) {
        marker = Marker.get_marker();
    } else {
        var get_marker = Marker.get_from_params();
        if ( get_marker == undefined ) {
            marker = set_marker;
        } else {
            marker = get_marker;
        }

    }



<!-- set form settings -->
window.TP_FORM_SETTINGS = window.TP_FORM_SETTINGS ||
    {};
window.TP_FORM_SETTINGS[set_handle] = {
        "handle": set_handle,
			"widget_name": "Travel.com Travel Landings EN",
			"border_radius": "2",
			"additional_marker": null,
			"width": 940,
			"show_logo": false,
			"show_hotels": true,
			"form_type": "hotel",
			"locale": "en",
			"currency": "usd",
			"sizes": "default",
			"search_target": "_blank",
			"active_tab": "avia",
			"search_host": "www.jetradar.com",
			"hotels_host": "go.obeyi.com/search",
			"hotel": "",
			"hotel_alt": "Travel.com Travel - hotel price comparison. Search for hotels and find the best price",
			"avia_alt": "",
			"retargeting": true,
			"trip_class": "economy",
			"depart_date": null,
			"return_date": null,
			"check_in_date": null,
			"check_out_date": null,
			"id": 69271,
			"marker": marker  +'._landings'
    }
<!-- set form settings -->

<!-- add form widgets -->
    $(document).ready(function() {
        var script = document.createElement('script');
        script.setAttribute('charset', 'utf-8');
        script.setAttribute('async', 'true');
        script.setAttribute('src', '//www.travelpayouts.com/widgets/'+set_handle+'.js?v=715');
        $('#present__form, #widget__form, #widget2__form').append(script);
    });

<!-- add form widgets end -->
<!-- set links address -->
    docReady(function()
			{
				var href = "https://go.obeyi.com/?marker=" + marker  +'._landings';
				var logo1 = document.getElementById('logo-top');
				var logo2 = document.getElementById('logo-bottom');
				var discountsItems = document.getElementsByClassName('discounts-item');
				var slides = document.getElementsByClassName('slide');
				logo1.setAttribute('href', href);
				logo2.setAttribute('href', href);
				for (var i = 0; i < discountsItems.length; i++)
				{
					discountsItems[i].setAttribute('href', href);
				}
				for (var i = 0; i < slides.length; i++)
				{
					slides[i].setAttribute('href', href);
				}
			});
<!-- set links address -->