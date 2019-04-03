(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(28)},23:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(14),c=a.n(r),s=a(4),l=a(5),i=a(7),u=a(6),h=a(8),m=a(29),p=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.bookInfo,a=t.title,n=t.authors,r=t.imageLinks,c=t.shelf;return o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(r?r.thumbnail:void 0,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{value:c||"none",onChange:function(t){e.props.shelfUpdate(e.props.bookInfo,t.target.value)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},a),n?n.map(function(e,t){return o.a.createElement("div",{key:t,className:"book-authors"},e)}):void 0)}}]),t}(n.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.book.results;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(m.a,{to:"/"},o.a.createElement("button",{onClick:this.props.deleteQuery,className:"close-search"},"Close")),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:this.props.query,onChange:function(t){return e.props.updateQuery(t.target.value)}}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},t.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(p,{shelfUpdate:e.props.change,bookInfo:t}))}))))}}]),t}(n.Component),d=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},this.props.shelfName),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},this.props.books.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(p,{shelfUpdate:e.props.c,bookInfo:t}))}))))}}]),t}(n.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.book.allBooks;return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement(d,{c:this.props.change,shelfName:"Currently Reading",books:e.filter(function(e){return"currentlyReading"===e.shelf})}),o.a.createElement(d,{c:this.props.change,shelfName:"Want To Read",books:e.filter(function(e){return"wantToRead"===e.shelf})}),o.a.createElement(d,{c:this.props.change,shelfName:"Finished Reading",books:e.filter(function(e){return"read"===e.shelf})}))),o.a.createElement("div",{className:"open-search"},o.a.createElement(m.a,{to:"/search",className:"open-search"},o.a.createElement("button",null,"Add a book"))))}}]),t}(n.Component),k=a(31),E=(a(23),a(12)),v="https://reactnd-books-api.udacity.com",y=localStorage.token;y||(y=localStorage.token=Math.random().toString(36).substr(-8));var j={Accept:"application/json",Authorization:y},g=function(){return fetch("".concat(v,"/books"),{headers:j}).then(function(e){return e.json()}).then(function(e){return e.books})},O=function(e,t){return fetch("".concat(v,"/books/").concat(e.id),{method:"PUT",headers:Object(E.a)({},j,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},N=function(e){return fetch("".concat(v,"/search"),{method:"POST",headers:Object(E.a)({},j,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={allBooks:[],results:[],query:""},a.componentDidMount=function(){g().then(function(e){a.setState({allBooks:e})})},a.changeShelf=function(e,t){O(e,t).then(function(){e.shelf=t,a.setState(function(t){return{allBooks:t.allBooks.filter(function(t){return t.id!==e.id}).concat([e])}})})},a.searchBooks=function(){if(""===a.state.query.trim()||void 0===a.state.query)return a.setState({results:[]});N(a.state.query.trim()).then(function(e){return e.error||!e?a.setState({results:[]}):(a.state.allBooks.forEach(function(t){e.forEach(function(e){t.id===e.id&&(e.shelf=t.shelf)})}),a.setState({results:e}))})},a.updateQuery=function(e){a.setState({query:e},a.searchBooks)},a.deleteQuery=function(){a.setState({query:""},a.searchBooks)},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(k.a,{exact:!0,path:"/search",render:function(){return o.a.createElement(f,{deleteQuery:e.deleteQuery,updateQuery:e.updateQuery,change:e.changeShelf,book:e.state,searchBooks:e.searchBooks})}}),o.a.createElement(k.a,{exact:!0,path:"/",render:function(){return o.a.createElement(b,{book:e.state,change:e.changeShelf})}}))}}]),t}(n.Component),C=(a(26),a(30));c.a.render(o.a.createElement(C.a,null,o.a.createElement(S,null)),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.b285aba8.chunk.js.map