const dataLoad = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))

}

// const displayComments = comments => {
//     const commentsDisplay = document.getElementById('comments-display');
//     for (const comment of comments) {
//         // console.log(comment);


//         const commentsDiv = document.createElement('div');
//         commentsDiv.classList.add('comment');
//         commentsDiv.innerHTML = `
//         <h4>Name: ${comment.name} </h4>
//         <p> Id: ${comment.id}</p>
//           <p> Email: ${comment.email}</p>

//         `;
//         commentsDisplay.appendChild(commentsDiv)
//     }
// }

// using foreach ::::

// ::::::
const displayComments = Comments => {
    const commentsDisplay = document.getElementById('comments-display');
    Comments.forEach(comment => {
        console.log(comment);

        const commentsDiv = document.createElement('div');
        commentsDiv.classList.add('comment');
        commentsDiv.innerHTML = `
        <h4>Name: ${comment.name} </h4>
        <p> Body: ${comment.body}</p>
          <p> Email: ${comment.email}</p>
          <button onclick="loadCommentsDetail(${comment.postId})">comments:</button>

        `;
        commentsDisplay.appendChild(commentsDiv)
    });
}

const loadCommentsDetail = (id) => {
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`
    // console.log('get comments detail', id)
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => loadCommentsDetailDisplay(data))

}

const loadCommentsDetailDisplay = (item) => {
    const showComments = document.getElementById('show-comments');
    console.log(item);
    showComments.innerHTML = `
    <h5>id: ${item.id} </h5>
    
    <p> postId: ${item.postId}</p>
    `;
}
dataLoad();