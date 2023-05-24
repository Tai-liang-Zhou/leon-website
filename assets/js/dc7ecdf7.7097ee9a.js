"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8929],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>f});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(l),c=a,f=d["".concat(o,".").concat(c)]||d[c]||m[c]||r;return l?n.createElement(f,i(i({ref:t},u),{},{components:l})):n.createElement(f,i({ref:t},u))}));function f(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=l[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},5534:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=l(7462),a=(l(7294),l(3905));const r={id:"filebeat",title:"Filebeat",sidebar_position:2},i=void 0,s={unversionedId:"Kubernetes/filebeat",id:"Kubernetes/filebeat",title:"Filebeat",description:"\u4f7f\u7528 filebeat \u76ee\u7684",source:"@site/studynotes/Kubernetes/filebeat.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/filebeat",permalink:"/studynotes/Kubernetes/filebeat",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"filebeat",title:"Filebeat",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"cronjob helm template",permalink:"/studynotes/Kubernetes/cronjob-helm"},next:{title:"React\u5b78\u7fd2\u7b46\u8a18",permalink:"/studynotes/category/react\u5b78\u7fd2\u7b46\u8a18"}},o={},p=[{value:"\u4f7f\u7528 filebeat \u76ee\u7684",id:"\u4f7f\u7528-filebeat-\u76ee\u7684",level:2},{value:"filebeat \u4f7f\u7528\u7c21\u55ae",id:"filebeat-\u4f7f\u7528\u7c21\u55ae",level:2},{value:"Filebeat \u600e\u9ebc\u904b\u4f5c\u7684",id:"filebeat-\u600e\u9ebc\u904b\u4f5c\u7684",level:2},{value:"harvester",id:"harvester",level:3},{value:"inputs",id:"inputs",level:3},{value:"Filebeat \u600e\u9ebc\u4fdd\u5b58\u6bcf\u500b\u6a94\u6848\u7684\u72c0\u614b\uff1f",id:"filebeat-\u600e\u9ebc\u4fdd\u5b58\u6bcf\u500b\u6a94\u6848\u7684\u72c0\u614b",level:3},{value:"Filebeat \u600e\u9ebc\u78ba\u4fdd\u6bcf\u7b46\u8cc7\u6599\u90fd\u6709\u4e0a\u50b3",id:"filebeat-\u600e\u9ebc\u78ba\u4fdd\u6bcf\u7b46\u8cc7\u6599\u90fd\u6709\u4e0a\u50b3",level:3},{value:"filestream input",id:"filestream-input",level:2},{value:"harvester_limit",id:"harvester_limit",level:3},{value:"check_interval",id:"check_interval",level:3},{value:"ignore_older",id:"ignore_older",level:3},{value:"close_renamed &amp; close_removed",id:"close_renamed--close_removed",level:3},{value:"filestream output",id:"filestream-output",level:2},{value:"Add fields",id:"add-fields",level:2},{value:"Log filter",id:"log-filter",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...l}=e;return(0,a.kt)(d,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4f7f\u7528-filebeat-\u76ee\u7684"},"\u4f7f\u7528 filebeat \u76ee\u7684"),(0,a.kt)("p",null,"\u4ee5\u5f80\u5c07 log \u642c\u904b\u5230 ELK \u6703\u9047\u5230\u4ee5\u4e0b\u554f\u984c"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Elastic \u7a7a\u9593\u6548\u80fd\u6709\u9650\uff0c\u5927\u91cf\u7684 log \u5c07\u6703\u628a Server \u6253\u7206"),(0,a.kt)("li",{parentName:"ol"},"Logstash \u5403\u5927\u91cf\u8cc7\u6e90\u548c\u6548\u80fd\u6703\u5c0d Server \u9020\u6210\u8ca0\u64d4 (CPU or MEM High)")),(0,a.kt)("p",null,"Filebeat\u3001Logstash \u90fd\u662f\u7528\u65bc\u6536\u96c6\u3001\u8f49\u63db\u548c\u50b3\u8f38\u65e5\u8a8c\u6578\u64da\u7684\u5de5\u5177\uff0c\u5b83\u5011\u5404\u6709\u512a\u7f3a\u9ede\uff0c\u5177\u9ad4\u6bd4\u8f03\u5982\u4e0b\uff1a"),(0,a.kt)("h2",{id:"filebeat-\u4f7f\u7528\u7c21\u55ae"},"filebeat \u4f7f\u7528\u7c21\u55ae"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Tool"),(0,a.kt)("th",{parentName:"tr",align:null},"Pros"),(0,a.kt)("th",{parentName:"tr",align:null},"Cons"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Filebeat"),(0,a.kt)("td",{parentName:"tr",align:null},"Lightweight",(0,a.kt)("br",null),"Less system resources"),(0,a.kt)("td",{parentName:"tr",align:null},"Does not have data processing and transformation capabilities")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Logstash"),(0,a.kt)("td",{parentName:"tr",align:null},"Multiple data processing and transformation capabilities"),(0,a.kt)("td",{parentName:"tr",align:null},"Requires more system resources and occupies more memory")))),(0,a.kt)("h2",{id:"filebeat-\u600e\u9ebc\u904b\u4f5c\u7684"},"Filebeat \u600e\u9ebc\u904b\u4f5c\u7684"),(0,a.kt)("p",null,"filebeat \u5305\u542b\u5169\u500b\u4e3b\u8981\u90e8\u4efd ",(0,a.kt)("inlineCode",{parentName:"p"},"harvesters")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"inputs")," \u6703\u4e00\u8d77\u904b\u4f5c\u5c07 log \u505a\u8f38\u51fa"),(0,a.kt)("h3",{id:"harvester"},"harvester"),(0,a.kt)("p",null,"harvester \u8b80\u53d6\u6bcf\u4e00\u4efd\u6a94\u6848 line by line \u4e26\u628a\u5167\u5bb9\u4f5c\u8f38\u51fa\u3002\n\u5728 harvester \u958b\u555f\u8207\u95dc\u9589\u6a94\u6848\u6642\uff0c\u5982\u679c\u6a94\u6848\u88ab\u79fb\u9664\u6216\u6539\u540d Filebeat \u9084\u662f\u6703\u6301\u7e8c\u8b80\u53d6\u6a94\u6848\n\u9019\u500b\u6703\u9020\u6210\u4e00\u500b side effect \uff0c \u5c31\u662f\u6a94\u6848\u6703\u88ab\u4fdd\u5b58\u5728 disk \u4e2d\uff0c\u76f4\u5230 harvester \u8b80\u53d6\u5b8c\u6a94\u6848"),(0,a.kt)("h3",{id:"inputs"},"inputs"),(0,a.kt)("p",null,"input \u662f\u7528\u4f86\u7ba1\u7406 harvesters \u548c\u627e\u5c0b\u53ef\u4ee5\u7528\u4f86\u8b80\u53d6\u7684\u8cc7\u6599\u6e90"),(0,a.kt)("h3",{id:"filebeat-\u600e\u9ebc\u4fdd\u5b58\u6bcf\u500b\u6a94\u6848\u7684\u72c0\u614b"},"Filebeat \u600e\u9ebc\u4fdd\u5b58\u6bcf\u500b\u6a94\u6848\u7684\u72c0\u614b\uff1f"),(0,a.kt)("p",null,"Filebeat \u4fdd\u5b58\u8b80\u53d6\u72c0\u614b\u5230 registry file. \u6700\u5f8c\u8b80\u53d6\u7684\u4f4d\u7f6e\u5c07\u6703\u4fdd\u5b58\u7528\u4ee5\u78ba\u4fdd\u6bcf\u4e00\u7b46\u8cc7\u6599\u90fd\u6709\u88ab\u4e0a\u50b3\u3002 \u7576 elastic \u6216 logstash \u8b8a\u5f97\u4e0d\u53ef\u670d\u52d9\u6642\uff0cFilebeat \u6703\u4fdd\u5b58\u6700\u5f8c\u8b80\u53d6\u4f4d\u7f6e\u4e26\u6301\u7e8c\u8b80\u53d6\u8cc7\u6599\uff0c\u76f4\u5230\u670d\u52d9\u56de\u6b78\uff0cFilebeat \u6703\u7e7c\u7e8c\u5c07\u672a\u4e0a\u50b3\u7684\u8cc7\u6599\u4e0a\u50b3\u3002Filebeat \u7528\u4e00\u7d44 unique id \u4ee3\u8868\u8b80\u53d6\u904e\u7684\u6a94\u6848\u540d\u7a31\u3002"),(0,a.kt)("h3",{id:"filebeat-\u600e\u9ebc\u78ba\u4fdd\u6bcf\u7b46\u8cc7\u6599\u90fd\u6709\u4e0a\u50b3"},"Filebeat \u600e\u9ebc\u78ba\u4fdd\u6bcf\u7b46\u8cc7\u6599\u90fd\u6709\u4e0a\u50b3"),(0,a.kt)("p",null,"\u7576 Filebeat \u5728\u50b3\u9001\u4e2d\u88ab\u95dc\u9589\u6642\uff0c\u4ed6\u4e0d\u6703\u7b49\u5f85 elastic \u78ba\u8a8d\u6536\u5230\u4e4b\u5f8c\u624d\u95dc\u9589\u3002\u4efb\u4f55\u6c92\u6709\u6536\u5230\u78ba\u8a8d\u7684 event\uff0cFilebeat \u6703\u90fd\u91cd\u65b0\u50b3\u9001\u4e00\u6b21\u3002\u9019\u7a2e\u65b9\u6cd5\u6709\u53ef\u80fd\u6703\u9020\u6210\u6709\u91cd\u8907\u7684\u8cc7\u6599\u51fa\u73fe\u3002"),(0,a.kt)("h2",{id:"filestream-input"},"filestream input"),(0,a.kt)("p",null,"\u8abf\u6574 filebeat \u7684\u5404\u7a2e input \u8a2d\u5b9a"),(0,a.kt)("h3",{id:"harvester_limit"},"harvester_limit"),(0,a.kt)("p",null,"\u7528\u65bc\u8a2d\u5b9a\u55ae\u500b input \u5e73\u884c\u904b\u884c\u7684 harvester \u6578\u91cf\uff0c\u6bcf\u4e00\u500b harvester \u7528\u4f86\u8655\u7406\u4e00\u500b\u6a94\u6848\uff0c\u5982\u679c\u589e\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"harvester_limit")," \u7684\u6578\u91cf\u53ef\u4ee5\u8b93 Filebeat \u540c\u6642\u8655\u7406\u66f4\u591a\u6587\u4ef6\u3002\u63d0\u9ad8\u8655\u7406\u6548\u7387\uff0cdefault value \u70ba 0\uff0c\u8868\u793a\u4e0d\u8a2d\u5b9a harvester \u6578\u91cf\u4e0a\u9650\uff0c\u5f88\u53ef\u80fd\u8b93\uff23\uff30\uff35\u904e\u9ad8\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"filebeat.inputs:\n  - type: filestream\n    enabled: true\n    paths:\n      - /path/to/log/*.log\n    harvester_limit: 8\n")),(0,a.kt)("h3",{id:"check_interval"},"check_interval"),(0,a.kt)("p",null,"\u7528\u4f86\u8a2d\u5b9a file scan \u983b\u7387\uff0c\u8f03\u5c0f\u7684\u503c\u5c07\u4f7f filebeat \u66f4\u983b\u7e41\u7684\u6383\u63cf\u6a94\u6848\uff0c\u4e5f\u6703\u589e\u52a0 CPU \u548c IO \u7684\u8ca0\u64d4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"filebeat.inputs:\n  - type: filestream\n    enabled: true\n    paths:\n      - /path/to/log/*.log\n    prospector.scanner.check_interval: 5s\n")),(0,a.kt)("h3",{id:"ignore_older"},"ignore_older"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ignore_older")," \u7528\u4f86\u8a2d\u5b9a\u5ffd\u7565\u820a\u6a94\u6848\u7684\u6642\u9593\u3002\u6e1b\u5c11\u6587\u4ef6\u8655\u7406\u7684\u6578\u91cf\u63d0\u9ad8\u6587\u4ef6\u6383\u63cf\u6548\u7387\u3002 \u5728 Filebeat init \u6642\u671f\u5927\u91cf\u6e1b\u5c11 cpu \u975e\u5e38\u6709\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"filebeat.inputs:\n  - type: filestream\n    enabled: true\n    paths:\n      - /path/to/log/*.log\n    ignore_older: 1d\n")),(0,a.kt)("h3",{id:"close_renamed--close_removed"},"close_renamed & close_removed"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The close_renamed and close_removed options can be useful on Windows to resolve issues related to file rotation. ref: ",(0,a.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/beats/filebeat/7.17/windows-file-rotation.html"},"Open file handlers cause issues with Windows file rotation."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"close_removed")," default \u60c5\u6cc1\u4e0b\uff0c\u7576 filebeat \u8655\u7406\u7684\u6587\u4ef6\u88ab\u522a\u9664\u7684\u6642\u5019\uff0cfilebeat \u9084\u662f\u6703\u6301\u7e8c\u6253\u958b\u6587\u4ef6\uff0c\u4e26\u5617\u8a66\u8b80\u53d6\u6587\u4ef6\u3002\u901a\u904e\u5c07 ",(0,a.kt)("inlineCode",{parentName:"li"},"close_removed")," \u8a2d\u5b9a\u70ba true \uff0c\u53ef\u4ee5\u8b93 filebeat \u5728\u5075\u6e2c\u5230\u6587\u4ef6\u88ab\u522a\u9664\u4e4b\u5f8c\u95dc\u9589\u6587\u4ef6\u8b80\u53d6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"close_renamed")," default \u60c5\u6cc1\u4e0b\uff0c\u7576 filebeat \u8655\u7406\u7684\u6587\u4ef6\u88ab rename \u7684\u6642\u5019\uff0cfilebeat \u9084\u662f\u6703\u6301\u7e8c\u6253\u958b\u6587\u4ef6\uff0c\u4e26\u5617\u8a66\u8b80\u53d6\u6587\u4ef6\u3002\u901a\u904e\u5c07 ",(0,a.kt)("inlineCode",{parentName:"li"},"close_renamed")," \u8a2d\u5b9a\u70ba true \uff0c\u53ef\u4ee5\u8b93 filebeat \u5728\u5075\u6e2c\u5230\u6587\u4ef6\u88ab rename \u4e4b\u5f8c\u95dc\u9589\u6587\u4ef6\u8b80\u53d6\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"filebeat.inputs:\n  - type: filestream\n    enabled: true\n    paths:\n      - /path/to/log/*.log\n    close_removed: true\n    close_renamed: true\n")),(0,a.kt)("h2",{id:"filestream-output"},"filestream output"),(0,a.kt)("p",null,"filebeat \u4e0a\u50b3\u983b\u7387\u662f\u7531 filebeat \u81ea\u5df1\u7ba1\u7406\u7684\uff0c\u6703\u6839\u64da config yaml \u8a2d\u5b9a\u63a7\u5236\u4e0a\u50b3\u983b\u7387\u3002"),(0,a.kt)("p",null,"bulk_max_size \u7528\u4e8e\u8a2d\u5b9a\u767c\u9001\u5230 Elasticsearch \u7684\u6bcf\u500b batch \u7684 event \u6578\u91cf default \u70ba 50\u3002\u8f03\u5927\u7684 size \u6703\u6e1b\u5c11 request \u7684\u983b\u7387\u3002\u76f8\u53cd\uff0c\u8f03\u5c0f\u7684 size \u589e\u52a0 request \u983b\u7387\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'output.elasticsearch:\n  hosts: ["localhost:9200"]\n  bulk_max_size: 2048\n')),(0,a.kt)("p",null,"\u4ee5\u4e0a\u7bc4\u4f8b\u5c07 ",(0,a.kt)("inlineCode",{parentName:"p"},"bulk_max_size")," \u8a2d\u5b9a\u70ba 2048\u3002\u8abf\u6574\u8abf\u6574\u8d8a\u5927\u7684\u503c\u4ee3\u8868\u8f03\u9ad8\u7684\u50b3\u9001\u6548\u7387\u3002\u4f46\u4e5f\u53ef\u80fd\u5403\u66f4\u591a\u7684\u8a18\u61b6\u9ad4\u6216 \uff29\uff2f"),(0,a.kt)("h2",{id:"add-fields"},"Add fields"),(0,a.kt)("p",null,"\u589e\u52a0\u81ea\u5b9a\u7fa9\u7684 fields \u5230 filebeat example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'filebeat.inputs:\n  - type: log\n    paths:\n      - /var/log/nginx/access.log\n    fields:\n      type: nginx_access\n    processors:\n      - add_fields:\n          target: ""\n          fields:\n            log_source: "nginx"\n')),(0,a.kt)("p",null,"\u9019\u500b example \u7528\u4f86\u8655\u7406 nginx \u7684 access.log\uff0c\u4e26\u5c07\u4e00\u500b fields \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," \u8986\u5beb\u70ba nginx_access\u3002\u9084\u4f7f\u7528\u4e86 add_fields \u589e\u52a0\u4e86\u4e00\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"log_source")," \u7684 field\uff0c\u4e26\u8a2d\u5b9a\u70ba ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx")),(0,a.kt)("h2",{id:"log-filter"},"Log filter"),(0,a.kt)("p",null,"\u4ee5\u4e0b example \u4f7f\u7528\u4e86 process \u4f86\u505a log \u7be9\u9078\u548c\u8f49\u63db"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"drop_event"),': \u5c07 log message \u88cf\u9762\u5305\u542b "debug" \u7684 log \u522a\u9664'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dissect"),': \u5c07 log message \u62c6\u5206\u70ba "log_level" \u548c "message" \u5169\u500b field'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"add_fields"),': \u6dfb\u52a0\u4e00\u500b "log_source" field \u4e26\u8a2d\u5b9a\u70ba system_logs'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rename"),':"log_level" \u91cd\u65b0\u547d\u540d\u70ba "severity"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"convert"),": \u5c07 severity \u8f49\u6210 int"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"drop_event"),": \u5c07 log message \u7b26\u5408\u5305\u542b\u6587\u5b57\u6216\u8005 regexp \u689d\u4ef6\u7684\u522a\u9664"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"drop_event")," source: \u5c07\u4f86\u81ea\u65bc\u67d0 source file \u7684 log message \u522a\u9664")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'filebeat.inputs:\n- type: log\n    paths:\n    - /var/log/messages\n    fields:\n    log_type: system\n    processors:\n    - drop_event:\n        when:\n          contains:\n          message: "debug"\n    - dissect:\n        tokenizer: "%{log_level} %{message}"\n        target_prefix: "log_"\n        field: "message"\n    - add_fields:\n        target: ""\n        fields:\n          log_source: "system_logs"\n    - rename:\n        fields:\n          log_level: severity\n    - convert:\n        fields:\n          severity: integer\n    - drop_event:\n        when:\n          contains:\n            message: "debug"\n    - drop_event:\n        when:\n          regexp:\n            message: "^WARN:"\n    - drop_event:\n        when:\n          contains:\n            source: "test"\n')))}m.isMDXComponent=!0}}]);