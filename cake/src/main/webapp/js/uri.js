/*! URI.js v1.8.3 http://medialize.github.com/URI.js/ */
/* build contains: SecondLevelDomains.js, URI.js, URITemplate.js */
(function(h,f){"object"===typeof exports?module.exports=f():"function"===typeof define&&define.amd?define(f):h.SecondLevelDomains=f()})(this,function(){var h=Object.prototype.hasOwnProperty,f={list:{ac:"com|gov|mil|net|org",ae:"ac|co|gov|mil|name|net|org|pro|sch",af:"com|edu|gov|net|org",al:"com|edu|gov|mil|net|org",ao:"co|ed|gv|it|og|pb",ar:"com|edu|gob|gov|int|mil|net|org|tur",at:"ac|co|gv|or",au:"asn|com|csiro|edu|gov|id|net|org",ba:"co|com|edu|gov|mil|net|org|rs|unbi|unmo|unsa|untz|unze",bb:"biz|co|com|edu|gov|info|net|org|store|tv",
    bh:"biz|cc|com|edu|gov|info|net|org",bn:"com|edu|gov|net|org",bo:"com|edu|gob|gov|int|mil|net|org|tv",br:"adm|adv|agr|am|arq|art|ato|b|bio|blog|bmd|cim|cng|cnt|com|coop|ecn|edu|eng|esp|etc|eti|far|flog|fm|fnd|fot|fst|g12|ggf|gov|imb|ind|inf|jor|jus|lel|mat|med|mil|mus|net|nom|not|ntr|odo|org|ppg|pro|psc|psi|qsl|rec|slg|srv|tmp|trd|tur|tv|vet|vlog|wiki|zlg",bs:"com|edu|gov|net|org",bz:"du|et|om|ov|rg",ca:"ab|bc|mb|nb|nf|nl|ns|nt|nu|on|pe|qc|sk|yk",ck:"biz|co|edu|gen|gov|info|net|org",cn:"ac|ah|bj|com|cq|edu|fj|gd|gov|gs|gx|gz|ha|hb|he|hi|hl|hn|jl|js|jx|ln|mil|net|nm|nx|org|qh|sc|sd|sh|sn|sx|tj|tw|xj|xz|yn|zj",
    co:"com|edu|gov|mil|net|nom|org",cr:"ac|c|co|ed|fi|go|or|sa",cy:"ac|biz|com|ekloges|gov|ltd|name|net|org|parliament|press|pro|tm","do":"art|com|edu|gob|gov|mil|net|org|sld|web",dz:"art|asso|com|edu|gov|net|org|pol",ec:"com|edu|fin|gov|info|med|mil|net|org|pro",eg:"com|edu|eun|gov|mil|name|net|org|sci",er:"com|edu|gov|ind|mil|net|org|rochest|w",es:"com|edu|gob|nom|org",et:"biz|com|edu|gov|info|name|net|org",fj:"ac|biz|com|info|mil|name|net|org|pro",fk:"ac|co|gov|net|nom|org",fr:"asso|com|f|gouv|nom|prd|presse|tm",
    gg:"co|net|org",gh:"com|edu|gov|mil|org",gn:"ac|com|gov|net|org",gr:"com|edu|gov|mil|net|org",gt:"com|edu|gob|ind|mil|net|org",gu:"com|edu|gov|net|org",hk:"com|edu|gov|idv|net|org",id:"ac|co|go|mil|net|or|sch|web",il:"ac|co|gov|idf|k12|muni|net|org","in":"ac|co|edu|ernet|firm|gen|gov|i|ind|mil|net|nic|org|res",iq:"com|edu|gov|i|mil|net|org",ir:"ac|co|dnssec|gov|i|id|net|org|sch",it:"edu|gov",je:"co|net|org",jo:"com|edu|gov|mil|name|net|org|sch",jp:"ac|ad|co|ed|go|gr|lg|ne|or",ke:"ac|co|go|info|me|mobi|ne|or|sc",
    kh:"com|edu|gov|mil|net|org|per",ki:"biz|com|de|edu|gov|info|mob|net|org|tel",km:"asso|com|coop|edu|gouv|k|medecin|mil|nom|notaires|pharmaciens|presse|tm|veterinaire",kn:"edu|gov|net|org",kr:"ac|busan|chungbuk|chungnam|co|daegu|daejeon|es|gangwon|go|gwangju|gyeongbuk|gyeonggi|gyeongnam|hs|incheon|jeju|jeonbuk|jeonnam|k|kg|mil|ms|ne|or|pe|re|sc|seoul|ulsan",kw:"com|edu|gov|net|org",ky:"com|edu|gov|net|org",kz:"com|edu|gov|mil|net|org",lb:"com|edu|gov|net|org",lk:"assn|com|edu|gov|grp|hotel|int|ltd|net|ngo|org|sch|soc|web",
    lr:"com|edu|gov|net|org",lv:"asn|com|conf|edu|gov|id|mil|net|org",ly:"com|edu|gov|id|med|net|org|plc|sch",ma:"ac|co|gov|m|net|org|press",mc:"asso|tm",me:"ac|co|edu|gov|its|net|org|priv",mg:"com|edu|gov|mil|nom|org|prd|tm",mk:"com|edu|gov|inf|name|net|org|pro",ml:"com|edu|gov|net|org|presse",mn:"edu|gov|org",mo:"com|edu|gov|net|org",mt:"com|edu|gov|net|org",mv:"aero|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro",mw:"ac|co|com|coop|edu|gov|int|museum|net|org",mx:"com|edu|gob|net|org",my:"com|edu|gov|mil|name|net|org|sch",
    nf:"arts|com|firm|info|net|other|per|rec|store|web",ng:"biz|com|edu|gov|mil|mobi|name|net|org|sch",ni:"ac|co|com|edu|gob|mil|net|nom|org",np:"com|edu|gov|mil|net|org",nr:"biz|com|edu|gov|info|net|org",om:"ac|biz|co|com|edu|gov|med|mil|museum|net|org|pro|sch",pe:"com|edu|gob|mil|net|nom|org|sld",ph:"com|edu|gov|i|mil|net|ngo|org",pk:"biz|com|edu|fam|gob|gok|gon|gop|gos|gov|net|org|web",pl:"art|bialystok|biz|com|edu|gda|gdansk|gorzow|gov|info|katowice|krakow|lodz|lublin|mil|net|ngo|olsztyn|org|poznan|pwr|radom|slupsk|szczecin|torun|warszawa|waw|wroc|wroclaw|zgora",
    pr:"ac|biz|com|edu|est|gov|info|isla|name|net|org|pro|prof",ps:"com|edu|gov|net|org|plo|sec",pw:"belau|co|ed|go|ne|or",ro:"arts|com|firm|info|nom|nt|org|rec|store|tm|www",rs:"ac|co|edu|gov|in|org",sb:"com|edu|gov|net|org",sc:"com|edu|gov|net|org",sh:"co|com|edu|gov|net|nom|org",sl:"com|edu|gov|net|org",st:"co|com|consulado|edu|embaixada|gov|mil|net|org|principe|saotome|store",sv:"com|edu|gob|org|red",sz:"ac|co|org",tr:"av|bbs|bel|biz|com|dr|edu|gen|gov|info|k12|name|net|org|pol|tel|tsk|tv|web",tt:"aero|biz|cat|co|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel",
    tw:"club|com|ebiz|edu|game|gov|idv|mil|net|org",mu:"ac|co|com|gov|net|or|org",mz:"ac|co|edu|gov|org",na:"co|com",nz:"ac|co|cri|geek|gen|govt|health|iwi|maori|mil|net|org|parliament|school",pa:"abo|ac|com|edu|gob|ing|med|net|nom|org|sld",pt:"com|edu|gov|int|net|nome|org|publ",py:"com|edu|gov|mil|net|org",qa:"com|edu|gov|mil|net|org",re:"asso|com|nom",ru:"ac|adygeya|altai|amur|arkhangelsk|astrakhan|bashkiria|belgorod|bir|bryansk|buryatia|cbg|chel|chelyabinsk|chita|chukotka|chuvashia|com|dagestan|e-burg|edu|gov|grozny|int|irkutsk|ivanovo|izhevsk|jar|joshkar-ola|kalmykia|kaluga|kamchatka|karelia|kazan|kchr|kemerovo|khabarovsk|khakassia|khv|kirov|koenig|komi|kostroma|kranoyarsk|kuban|kurgan|kursk|lipetsk|magadan|mari|mari-el|marine|mil|mordovia|mosreg|msk|murmansk|nalchik|net|nnov|nov|novosibirsk|nsk|omsk|orenburg|org|oryol|penza|perm|pp|pskov|ptz|rnd|ryazan|sakhalin|samara|saratov|simbirsk|smolensk|spb|stavropol|stv|surgut|tambov|tatarstan|tom|tomsk|tsaritsyn|tsk|tula|tuva|tver|tyumen|udm|udmurtia|ulan-ude|vladikavkaz|vladimir|vladivostok|volgograd|vologda|voronezh|vrn|vyatka|yakutia|yamal|yekaterinburg|yuzhno-sakhalinsk",
    rw:"ac|co|com|edu|gouv|gov|int|mil|net",sa:"com|edu|gov|med|net|org|pub|sch",sd:"com|edu|gov|info|med|net|org|tv",se:"a|ac|b|bd|c|d|e|f|g|h|i|k|l|m|n|o|org|p|parti|pp|press|r|s|t|tm|u|w|x|y|z",sg:"com|edu|gov|idn|net|org|per",sn:"art|com|edu|gouv|org|perso|univ",sy:"com|edu|gov|mil|net|news|org",th:"ac|co|go|in|mi|net|or",tj:"ac|biz|co|com|edu|go|gov|info|int|mil|name|net|nic|org|test|web",tn:"agrinet|com|defense|edunet|ens|fin|gov|ind|info|intl|mincom|nat|net|org|perso|rnrt|rns|rnu|tourism",tz:"ac|co|go|ne|or",
    ua:"biz|cherkassy|chernigov|chernovtsy|ck|cn|co|com|crimea|cv|dn|dnepropetrovsk|donetsk|dp|edu|gov|if|in|ivano-frankivsk|kh|kharkov|kherson|khmelnitskiy|kiev|kirovograd|km|kr|ks|kv|lg|lugansk|lutsk|lviv|me|mk|net|nikolaev|od|odessa|org|pl|poltava|pp|rovno|rv|sebastopol|sumy|te|ternopil|uzhgorod|vinnica|vn|zaporizhzhe|zhitomir|zp|zt",ug:"ac|co|go|ne|or|org|sc",uk:"ac|bl|british-library|co|cym|gov|govt|icnet|jet|lea|ltd|me|mil|mod|national-library-scotland|nel|net|nhs|nic|nls|org|orgn|parliament|plc|police|sch|scot|soc",
    us:"dni|fed|isa|kids|nsn",uy:"com|edu|gub|mil|net|org",ve:"co|com|edu|gob|info|mil|net|org|web",vi:"co|com|k12|net|org",vn:"ac|biz|com|edu|gov|health|info|int|name|net|org|pro",ye:"co|com|gov|ltd|me|net|org|plc",yu:"ac|co|edu|gov|org",za:"ac|agric|alt|bourse|city|co|cybernet|db|edu|gov|grondar|iaccess|imt|inca|landesign|law|mil|net|ngo|nis|nom|olivetti|org|pix|school|tm|web",zm:"ac|co|com|edu|gov|net|org|sch"},has_expression:null,is_expression:null,has:function(h){return!!h.match(f.has_expression)},
    is:function(h){return!!h.match(f.is_expression)},get:function(h){return(h=h.match(f.has_expression))&&h[1]||null},init:function(){var s="",d;for(d in f.list)h.call(f.list,d)&&(s+="|("+("("+f.list[d]+")."+d)+")");f.has_expression=RegExp("\\.("+s.substr(1)+")$","i");f.is_expression=RegExp("^("+s.substr(1)+")$","i")}};f.init();return f});
(function(h,f){"object"===typeof exports?module.exports=f(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"===typeof define&&define.amd?define(["./punycode","./IPv6","./SecondLevelDomains"],f):h.URI=f(h.punycode,h.IPv6,h.SecondLevelDomains)})(this,function(h,f,s){function d(a,b){if(!(this instanceof d))return new d(a,b);void 0===a&&(a="undefined"!==typeof location?location.href+"":"");this.href(a);return void 0!==b?this.absoluteTo(b):this}function t(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,
    "\\$1")}function u(a){return"[object Array]"===String(Object.prototype.toString.call(a))}function g(a){return encodeURIComponent(a).replace(/[!'()*]/g,escape).replace(/\*/g,"%2A")}var c=d.prototype,v=Object.prototype.hasOwnProperty;d._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,duplicateQueryParameters:d.duplicateQueryParameters}};d.duplicateQueryParameters=!1;d.protocol_expression=/^[a-z][a-z0-9-+-]*$/i;d.idn_expression=
    /[^a-z0-9\.-]/i;d.punycode_expression=/(xn--)/i;d.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;d.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
    d.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;d.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"};d.invalid_hostname_characters=/[^a-zA-Z0-9\.-]/;d.encode=g;d.decode=decodeURIComponent;d.iso8859=function(){d.encode=escape;d.decode=unescape};d.unicode=function(){d.encode=
        g;d.decode=decodeURIComponent};d.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+",
        "%2C":",","%3B":";","%3D":"="}}}};d.encodeQuery=function(a){return d.encode(a+"").replace(/%20/g,"+")};d.decodeQuery=function(a){return d.decode((a+"").replace(/\+/g,"%20"))};d.recodePath=function(a){a=(a+"").split("/");for(var b=0,e=a.length;b<e;b++)a[b]=d.encodePathSegment(d.decode(a[b]));return a.join("/")};d.decodePath=function(a){a=(a+"").split("/");for(var b=0,e=a.length;b<e;b++)a[b]=d.decodePathSegment(a[b]);return a.join("/")};var p={encode:"encode",decode:"decode"},m,n=function(a,b){return function(e){return d[b](e+
        "").replace(d.characters[a][b].expression,function(e){return d.characters[a][b].map[e]})}};for(m in p)d[m+"PathSegment"]=n("pathname",p[m]);d.encodeReserved=n("reserved","encode");d.parse=function(a,b){var e;b||(b={});e=a.indexOf("#");-1<e&&(b.fragment=a.substring(e+1)||null,a=a.substring(0,e));e=a.indexOf("?");-1<e&&(b.query=a.substring(e+1)||null,a=a.substring(0,e));"//"===a.substring(0,2)?(b.protocol="",a=a.substring(2),a=d.parseAuthority(a,b)):(e=a.indexOf(":"),-1<e&&(b.protocol=a.substring(0,
        e),b.protocol&&!b.protocol.match(d.protocol_expression)?b.protocol=void 0:"file"===b.protocol?a=a.substring(e+3):"//"===a.substring(e+1,e+3)?(a=a.substring(e+3),a=d.parseAuthority(a,b)):(a=a.substring(e+1),b.urn=!0)));b.path=a;return b};d.parseHost=function(a,b){var e=a.indexOf("/"),d;-1===e&&(e=a.length);"["===a[0]?(d=a.indexOf("]"),b.hostname=a.substring(1,d)||null,b.port=a.substring(d+2,e)||null):a.indexOf(":")!==a.lastIndexOf(":")?(b.hostname=a.substring(0,e)||null,b.port=null):(d=a.substring(0,
        e).split(":"),b.hostname=d[0]||null,b.port=d[1]||null);b.hostname&&"/"!==a.substring(e)[0]&&(e++,a="/"+a);return a.substring(e)||"/"};d.parseAuthority=function(a,b){a=d.parseUserinfo(a,b);return d.parseHost(a,b)};d.parseUserinfo=function(a,b){var e=a.indexOf("@"),k=a.indexOf("/");-1<e&&(-1===k||e<k)?(k=a.substring(0,e).split(":"),b.username=k[0]?d.decode(k[0]):null,k.shift(),b.password=k[0]?d.decode(k.join(":")):null,a=a.substring(e+1)):(b.username=null,b.password=null);return a};d.parseQuery=function(a){if(!a)return{};
        a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");if(!a)return{};var b={};a=a.split("&");for(var e=a.length,k,c,g=0;g<e;g++)k=a[g].split("="),c=d.decodeQuery(k.shift()),k=k.length?d.decodeQuery(k.join("=")):null,b[c]?("string"===typeof b[c]&&(b[c]=[b[c]]),b[c].push(k)):b[c]=k;return b};d.build=function(a){var b="";a.protocol&&(b+=a.protocol+":");if(!a.urn&&(b||a.hostname))b+="//";b+=d.buildAuthority(a)||"";"string"===typeof a.path&&("/"!==a.path[0]&&"string"===typeof a.hostname&&(b+="/"),b+=a.path);
        "string"===typeof a.query&&a.query&&(b+="?"+a.query);"string"===typeof a.fragment&&a.fragment&&(b+="#"+a.fragment);return b};d.buildHost=function(a){var b="";if(a.hostname)d.ip6_expression.test(a.hostname)?b=a.port?b+("["+a.hostname+"]:"+a.port):b+a.hostname:(b+=a.hostname,a.port&&(b+=":"+a.port));else return"";return b};d.buildAuthority=function(a){return d.buildUserinfo(a)+d.buildHost(a)};d.buildUserinfo=function(a){var b="";a.username&&(b+=d.encode(a.username),a.password&&(b+=":"+d.encode(a.password)),
        b+="@");return b};d.buildQuery=function(a,b){var e="",k,c,g,f;for(c in a)if(v.call(a,c)&&c)if(u(a[c])){k={};g=0;for(f=a[c].length;g<f;g++)void 0!==a[c][g]&&void 0===k[a[c][g]+""]&&(e+="&"+d.buildQueryParameter(c,a[c][g]),!0!==b&&(k[a[c][g]+""]=!0))}else void 0!==a[c]&&(e+="&"+d.buildQueryParameter(c,a[c]));return e.substring(1)};d.buildQueryParameter=function(a,b){return d.encodeQuery(a)+(null!==b?"="+d.encodeQuery(b):"")};d.addQuery=function(a,b,e){if("object"===typeof b)for(var k in b)v.call(b,
        k)&&d.addQuery(a,k,b[k]);else if("string"===typeof b)void 0===a[b]?a[b]=e:("string"===typeof a[b]&&(a[b]=[a[b]]),u(e)||(e=[e]),a[b]=a[b].concat(e));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");};d.removeQuery=function(a,b,e){var k;if(u(b)){e=0;for(k=b.length;e<k;e++)a[b[e]]=void 0}else if("object"===typeof b)for(k in b)v.call(b,k)&&d.removeQuery(a,k,b[k]);else if("string"===typeof b)if(void 0!==e)if(a[b]===e)a[b]=void 0;else{if(u(a[b])){k=a[b];var c={},
        g,f;if(u(e)){g=0;for(f=e.length;g<f;g++)c[e[g]]=!0}else c[e]=!0;g=0;for(f=k.length;g<f;g++)void 0!==c[k[g]]&&(k.splice(g,1),f--,g--);a[b]=k}}else a[b]=void 0;else throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");};d.commonPath=function(a,b){var e=Math.min(a.length,b.length),d;for(d=0;d<e;d++)if(a[d]!==b[d]){d--;break}if(1>d)return a[0]===b[0]&&"/"===a[0]?"/":"";"/"!==a[d]&&(d=a.substring(0,d).lastIndexOf("/"));return a.substring(0,d+1)};d.withinString=function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               b){return a.replace(d.find_uri_expression,b)};d.ensureValidHostname=function(a){if(a.match(d.invalid_hostname_characters)){if(!h)throw new TypeError("Hostname '"+a+"' contains characters other than [A-Z0-9.-] and Punycode.js is not available");if(h.toASCII(a).match(d.invalid_hostname_characters))throw new TypeError("Hostname '"+a+"' contains characters other than [A-Z0-9.-]");}};c.build=function(a){if(!0===a)this._deferred_build=!0;else if(void 0===a||this._deferred_build)this._string=d.build(this._parts),
        this._deferred_build=!1;return this};c.clone=function(){return new d(this)};c.valueOf=c.toString=function(){return this.build(!1)._string};p={protocol:"protocol",username:"username",password:"password",hostname:"hostname",port:"port"};n=function(a){return function(b,e){if(void 0===b)return this._parts[a]||"";this._parts[a]=b;this.build(!e);return this}};for(m in p)c[m]=n(p[m]);p={query:"?",fragment:"#"};n=function(a,b){return function(e,d){if(void 0===e)return this._parts[a]||"";null!==e&&(e+="",
        e[0]===b&&(e=e.substring(1)));this._parts[a]=e;this.build(!d);return this}};for(m in p)c[m]=n(m,p[m]);p={search:["?","query"],hash:["#","fragment"]};n=function(a,b){return function(e,d){var c=this[a](e,d);return"string"===typeof c&&c.length?b+c:c}};for(m in p)c[m]=n(p[m][1],p[m][0]);c.pathname=function(a,b){if(void 0===a||!0===a){var e=this._parts.path||(this._parts.urn?"":"/");return a?d.decodePath(e):e}this._parts.path=a?d.recodePath(a):"/";this.build(!b);return this};c.path=c.pathname;c.href=function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     b){var e;if(void 0===a)return this.toString();this._string="";this._parts=d._parts();var c=a instanceof d,g="object"===typeof a&&(a.hostname||a.path);!c&&(g&&"[object Object]"!==Object.prototype.toString.call(a))&&(a=a.toString());if("string"===typeof a)this._parts=d.parse(a,this._parts);else if(c||g)for(e in c=c?a._parts:a,c)v.call(this._parts,e)&&(this._parts[e]=c[e]);else throw new TypeError("invalid input");this.build(!b);return this};c.is=function(a){var b=!1,e=!1,c=!1,g=!1,f=!1,h=!1,j=!1,v=
        !this._parts.urn;this._parts.hostname&&(v=!1,e=d.ip4_expression.test(this._parts.hostname),c=d.ip6_expression.test(this._parts.hostname),b=e||c,f=(g=!b)&&s&&s.has(this._parts.hostname),h=g&&d.idn_expression.test(this._parts.hostname),j=g&&d.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return v;case "absolute":return!v;case "domain":case "name":return g;case "sld":return f;case "ip":return b;case "ip4":case "ipv4":case "inet4":return e;case "ip6":case "ipv6":case "inet6":return c;
        case "idn":return h;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;case "punycode":return j}return null};var l=c.protocol,j=c.port,r=c.hostname;c.protocol=function(a,b){if(void 0!==a&&a&&(a=a.replace(/:(\/\/)?$/,""),a.match(/[^a-zA-z0-9\.+-]/)))throw new TypeError("Protocol '"+a+"' contains characters other than [A-Z0-9.+-]");return l.call(this,a,b)};c.scheme=c.protocol;c.port=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a&&(0===a&&(a=null),a&&(a+="",
        ":"===a[0]&&(a=a.substring(1)),a.match(/[^0-9]/))))throw new TypeError("Port '"+a+"' contains characters other than [0-9]");return j.call(this,a,b)};c.hostname=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a){var e={};d.parseHost(a,e);a=e.hostname}return r.call(this,a,b)};c.host=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?d.buildHost(this._parts):"";d.parseHost(a,this._parts);this.build(!b);return this};c.authority=
        function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?d.buildAuthority(this._parts):"";d.parseAuthority(a,this._parts);this.build(!b);return this};c.userinfo=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.username)return"";var e=d.buildUserinfo(this._parts);return e.substring(0,e.length-1)}"@"!==a[a.length-1]&&(a+="@");d.parseUserinfo(a,this._parts);this.build(!b);return this};c.resource=function(a,b){var e;
        if(void 0===a)return this.path()+this.search()+this.hash();e=d.parse(a);this._parts.path=e.path;this._parts.query=e.query;this._parts.fragment=e.fragment;this.build(!b);return this};c.subdomain=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var e=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,e)||""}e=this._parts.hostname.length-this.domain().length;e=this._parts.hostname.substring(0,
        e);e=RegExp("^"+t(e));a&&"."!==a[a.length-1]&&(a+=".");a&&d.ensureValidHostname(a);this._parts.hostname=this._parts.hostname.replace(e,a);this.build(!b);return this};c.domain=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var e=this._parts.hostname.match(/\./g);if(e&&2>e.length)return this._parts.hostname;e=this._parts.hostname.length-this.tld(b).length-1;e=this._parts.hostname.lastIndexOf(".",
        e-1)+1;return this._parts.hostname.substring(e)||""}if(!a)throw new TypeError("cannot set domain empty");d.ensureValidHostname(a);!this._parts.hostname||this.is("IP")?this._parts.hostname=a:(e=RegExp(t(this.domain())+"$"),this._parts.hostname=this._parts.hostname.replace(e,a));this.build(!b);return this};c.tld=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var e=this._parts.hostname.lastIndexOf("."),
        e=this._parts.hostname.substring(e+1);return!0!==b&&s&&s.list[e.toLowerCase()]?s.get(this._parts.hostname)||e:e}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(s&&s.is(a))e=RegExp(t(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(e,a);else throw new TypeError("TLD '"+a+"' contains characters other than [A-Z0-9]");else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");e=RegExp(t(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(e,
        a)}else throw new TypeError("cannot set TLD empty");this.build(!b);return this};c.directory=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path&&!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var e=this._parts.path.length-this.filename().length-1,e=this._parts.path.substring(0,e)||(this._parts.hostname?"/":"");return a?d.decodePath(e):e}e=this._parts.path.length-this.filename().length;e=this._parts.path.substring(0,e);e=RegExp("^"+
        t(e));this.is("relative")||(a||(a="/"),"/"!==a[0]&&(a="/"+a));a&&"/"!==a[a.length-1]&&(a+="/");a=d.recodePath(a);this._parts.path=this._parts.path.replace(e,a);this.build(!b);return this};c.filename=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var e=this._parts.path.lastIndexOf("/"),e=this._parts.path.substring(e+1);return a?d.decodePathSegment(e):e}e=!1;"/"===a[0]&&(a=a.substring(1));a.match(/\.?\//)&&(e=!0);
        var c=RegExp(t(this.filename())+"$");a=d.recodePath(a);this._parts.path=this._parts.path.replace(c,a);e?this.normalizePath(b):this.build(!b);return this};c.suffix=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var e=this.filename(),c=e.lastIndexOf(".");if(-1===c)return"";e=e.substring(c+1);e=/^[a-z0-9%]+$/i.test(e)?e:"";return a?d.decodePathSegment(e):e}"."===a[0]&&(a=a.substring(1));if(e=this.suffix())c=a?RegExp(t(e)+
        "$"):RegExp(t("."+e)+"$");else{if(!a)return this;this._parts.path+="."+d.recodePath(a)}c&&(a=d.recodePath(a),this._parts.path=this._parts.path.replace(c,a));this.build(!b);return this};c.segment=function(a,b,e){var d=this._parts.urn?":":"/",c=this.path(),g="/"===c.substring(0,1),c=c.split(d);"number"!==typeof a&&(e=b,b=a,a=void 0);if(void 0!==a&&"number"!==typeof a)throw Error("Bad segment '"+a+"', must be 0-based integer");g&&c.shift();0>a&&(a=Math.max(c.length+a,0));if(void 0===b)return void 0===
        a?c:c[a];if(null===a||void 0===c[a])if(u(b))c=b;else{if(b||"string"===typeof b&&b.length)""===c[c.length-1]?c[c.length-1]=b:c.push(b)}else b||"string"===typeof b&&b.length?c[a]=b:c.splice(a,1);g&&c.unshift("");return this.path(c.join(d),e)};var q=c.query;c.query=function(a,b){return!0===a?d.parseQuery(this._parts.query):void 0!==a&&"string"!==typeof a?(this._parts.query=d.buildQuery(a,this._parts.duplicateQueryParameters),this.build(!b),this):q.call(this,a,b)};c.addQuery=function(a,b,e){var c=d.parseQuery(this._parts.query);
        d.addQuery(c,a,void 0===b?null:b);this._parts.query=d.buildQuery(c,this._parts.duplicateQueryParameters);"string"!==typeof a&&(e=b);this.build(!e);return this};c.removeQuery=function(a,b,e){var c=d.parseQuery(this._parts.query);d.removeQuery(c,a,b);this._parts.query=d.buildQuery(c,this._parts.duplicateQueryParameters);"string"!==typeof a&&(e=b);this.build(!e);return this};c.addSearch=c.addQuery;c.removeSearch=c.removeQuery;c.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build():
        this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};c.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!a));return this};c.normalizeHostname=function(a){this._parts.hostname&&(this.is("IDN")&&h?this._parts.hostname=h.toASCII(this._parts.hostname):this.is("IPv6")&&f&&(this._parts.hostname=f.best(this._parts.hostname)),this._parts.hostname=
        this._parts.hostname.toLowerCase(),this.build(!a));return this};c.normalizePort=function(a){"string"===typeof this._parts.protocol&&this._parts.port===d.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!a));return this};c.normalizePath=function(a){if(this._parts.urn||!this._parts.path||"/"===this._parts.path)return this;var b,e,c=this._parts.path,g,f;"/"!==c[0]&&("."===c[0]&&(e=c.substring(0,c.indexOf("/"))),b=!0,c="/"+c);for(c=c.replace(/(\/(\.\/)+)|\/{2,}/g,"/");;){g=c.indexOf("/../");
        if(-1===g)break;else if(0===g){c=c.substring(3);break}f=c.substring(0,g).lastIndexOf("/");-1===f&&(f=g);c=c.substring(0,f)+c.substring(g+3)}b&&this.is("relative")&&(c=e?e+c:c.substring(1));c=d.recodePath(c);this._parts.path=c;this.build(!a);return this};c.normalizePathname=c.normalizePath;c.normalizeQuery=function(a){"string"===typeof this._parts.query&&(this._parts.query.length?this.query(d.parseQuery(this._parts.query)):this._parts.query=null,this.build(!a));return this};c.normalizeFragment=function(a){this._parts.fragment||
    (this._parts.fragment=null,this.build(!a));return this};c.normalizeSearch=c.normalizeQuery;c.normalizeHash=c.normalizeFragment;c.iso8859=function(){var a=d.encode,b=d.decode;d.encode=escape;d.decode=decodeURIComponent;this.normalize();d.encode=a;d.decode=b;return this};c.unicode=function(){var a=d.encode,b=d.decode;d.encode=g;d.decode=unescape;this.normalize();d.encode=a;d.decode=b;return this};c.readable=function(){var a=this.clone();a.username("").password("").normalize();var b="";a._parts.protocol&&
    (b+=a._parts.protocol+"://");a._parts.hostname&&(a.is("punycode")&&h?(b+=h.toUnicode(a._parts.hostname),a._parts.port&&(b+=":"+a._parts.port)):b+=a.host());a._parts.hostname&&(a._parts.path&&"/"!==a._parts.path[0])&&(b+="/");b+=a.path(!0);if(a._parts.query){for(var e="",c=0,g=a._parts.query.split("&"),f=g.length;c<f;c++){var j=(g[c]||"").split("="),e=e+("&"+d.decodeQuery(j[0]).replace(/&/g,"%26"));void 0!==j[1]&&(e+="="+d.decodeQuery(j[1]).replace(/&/g,"%26"))}b+="?"+e.substring(1)}return b+=a.hash()};
    c.absoluteTo=function(a){var b=this.clone(),e=["protocol","username","password","hostname","port"],c,g;if(this._parts.urn)throw Error("URNs do not have any generally defined hierachical components");if(this._parts.hostname)return b;a instanceof d||(a=new d(a));c=0;for(g;g=e[c];c++)b._parts[g]=a._parts[g];e=["query","path"];c=0;for(g;g=e[c];c++)!b._parts[g]&&a._parts[g]&&(b._parts[g]=a._parts[g]);"/"!==b.path()[0]&&(a=a.directory(),b._parts.path=(a?a+"/":"")+b._parts.path,b.normalizePath());b.build();
        return b};c.relativeTo=function(a){var b=this.clone(),c=["protocol","username","password","hostname","port"],g;if(this._parts.urn)throw Error("URNs do not have any generally defined hierachical components");a instanceof d||(a=new d(a));if("/"!==this.path()[0]||"/"!==a.path()[0])throw Error("Cannot calculate common path from non-relative URLs");g=d.commonPath(b.path(),a.path());if(!g||"/"===g)return b;for(var f=0,j;j=c[f];f++)b._parts[j]=null;a=a.directory();c=this.directory();if(a===c)return b._parts.path=
        "./"+b.filename(),b.build();a.substring(g.length);c=c.substring(g.length);if(a+"/"===g)return c&&(c+="/"),b._parts.path="./"+c+b.filename(),b.build();c="../";g=RegExp("^"+t(g));for(a=a.replace(g,"/").match(/\//g).length-1;a--;)c+="../";b._parts.path=b._parts.path.replace(g,c);return b.build()};c.equals=function(a){var b=this.clone(),c=new d(a),g={},f={};a={};var j;b.normalize();c.normalize();if(b.toString()===c.toString())return!0;g=b.query();f=c.query();b.query("");c.query("");if(b.toString()!==
        c.toString()||g.length!==f.length)return!1;g=d.parseQuery(g);f=d.parseQuery(f);for(j in g)if(v.call(g,j)){if(u(g[j])){if(!u(f[j])||g[j].length!==f[j].length)return!1;g[j].sort();f[j].sort();b=0;for(c=g[j].length;b<c;b++)if(g[j][b]!==f[j][b])return!1}else if(g[j]!==f[j])return!1;a[j]=!0}for(j in f)if(v.call(f,j)&&!a[j])return!1;return!0};c.duplicateQueryParameters=function(a){this._parts.duplicateQueryParameters=!!a;return this};return d});
(function(h,f){"object"===typeof exports?module.exports=f(require("./URI")):"function"===typeof define&&define.amd?define(["./URI"],f):h.URITemplate=f(h.URI)})(this,function(h){function f(d){if(f._cache[d])return f._cache[d];if(!(this instanceof f))return new f(d);this.expression=d;f._cache[d]=this;return this}function s(d){this.data=d;this.cache={}}var d=Object.prototype.hasOwnProperty,t=f.prototype,u={"":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encode"},"+":{prefix:"",separator:",",
    named:!1,empty_name_separator:!1,encode:"encodeReserved"},"#":{prefix:"#",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},".":{prefix:".",separator:".",named:!1,empty_name_separator:!1,encode:"encode"},"/":{prefix:"/",separator:"/",named:!1,empty_name_separator:!1,encode:"encode"},";":{prefix:";",separator:";",named:!0,empty_name_separator:!1,encode:"encode"},"?":{prefix:"?",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"},"&":{prefix:"&",separator:"&",named:!0,
    empty_name_separator:!0,encode:"encode"}};f._cache={};f.EXPRESSION_PATTERN=/\{([^a-zA-Z0-9%_]?)([^\}]+)(\}|$)/g;f.VARIABLE_PATTERN=/^([^*:]+)((\*)|:(\d+))?$/;f.VARIABLE_NAME_PATTERN=/[^a-zA-Z0-9%_]/;f.expand=function(d,c){var h=u[d.operator],p=h.named?"Named":"Unnamed",m=d.variables,n=[],l,j,r;for(r=0;j=m[r];r++)l=c.get(j.name),l.val.length?n.push(f["expand"+p](l,h,j.explode,j.explode&&h.separator||",",j.maxlength,j.name)):l.type&&n.push("");return n.length?h.prefix+n.join(h.separator):""};f.expandNamed=
    function(d,c,f,p,m,n){var l="",j=c.encode;c=c.empty_name_separator;var r=!d[j].length,q=2===d.type?"":h[j](n),a,b,e;b=0;for(e=d.val.length;b<e;b++)m?(a=h[j](d.val[b][1].substring(0,m)),2===d.type&&(q=h[j](d.val[b][0].substring(0,m)))):r?(a=h[j](d.val[b][1]),2===d.type?(q=h[j](d.val[b][0]),d[j].push([q,a])):d[j].push([void 0,a])):(a=d[j][b][1],2===d.type&&(q=d[j][b][0])),l&&(l+=p),f?l+=q+(c||a?"=":"")+a:(b||(l+=h[j](n)+(c||a?"=":"")),2===d.type&&(l+=q+","),l+=a);return l};f.expandUnnamed=function(d,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         c,f,p,m){var n="",l=c.encode;c=c.empty_name_separator;var j=!d[l].length,r,q,a,b;a=0;for(b=d.val.length;a<b;a++)m?q=h[l](d.val[a][1].substring(0,m)):j?(q=h[l](d.val[a][1]),d[l].push([2===d.type?h[l](d.val[a][0]):void 0,q])):q=d[l][a][1],n&&(n+=p),2===d.type&&(r=m?h[l](d.val[a][0].substring(0,m)):d[l][a][0],n+=r,n=f?n+(c||q?"=":""):n+","),n+=q;return n};t.expand=function(d){var c="";(!this.parts||!this.parts.length)&&this.parse();d instanceof s||(d=new s(d));for(var h=0,p=this.parts.length;h<p;h++)c+=
    "string"===typeof this.parts[h]?this.parts[h]:f.expand(this.parts[h],d);return c};t.parse=function(){var d=this.expression,c=f.EXPRESSION_PATTERN,h=f.VARIABLE_PATTERN,p=f.VARIABLE_NAME_PATTERN,m=[],n=0,l,j,r;for(c.lastIndex=0;;){j=c.exec(d);if(null===j){m.push(d.substring(n));break}else m.push(d.substring(n,j.index)),n=j.index+j[0].length;if(u[j[1]]){if(!j[3])throw Error('Unclosed Expression "'+j[0]+'"');}else throw Error('Unknown Operator "'+j[1]+'" in "'+j[0]+'"');l=j[2].split(",");for(var q=0,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     a=l.length;q<a;q++){r=l[q].match(h);if(null===r)throw Error('Invalid Variable "'+l[q]+'" in "'+j[0]+'"');if(r[1].match(p))throw Error('Invalid Variable Name "'+r[1]+'" in "'+j[0]+'"');l[q]={name:r[1],explode:!!r[3],maxlength:r[4]&&parseInt(r[4],10)}}if(!l.length)throw Error('Expression Missing Variable(s) "'+j[0]+'"');m.push({expression:j[0],operator:j[1],variables:l})}m.length||m.push(d);this.parts=m;return this};s.prototype.get=function(g){var c=this.data,f={type:0,val:[],encode:[],encodeReserved:[]},
    h;if(void 0!==this.cache[g])return this.cache[g];this.cache[g]=f;c="[object Function]"===String(Object.prototype.toString.call(c))?c(g):"[object Function]"===String(Object.prototype.toString.call(c[g]))?c[g](g):c[g];if(!(void 0===c||null===c))if("[object Array]"===String(Object.prototype.toString.call(c))){h=0;for(g=c.length;h<g;h++)void 0!==c[h]&&null!==c[h]&&f.val.push([void 0,String(c[h])]);f.val.length&&(f.type=3)}else if("[object Object]"===String(Object.prototype.toString.call(c))){for(h in c)d.call(c,
    h)&&(void 0!==c[h]&&null!==c[h])&&f.val.push([h,String(c[h])]);f.val.length&&(f.type=2)}else f.type=1,f.val.push([void 0,String(c)]);return f};h.expand=function(d,c){var s=(new f(d)).expand(c);return new h(s)};return f});
