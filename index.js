const form = document.querySelector('.form');
const box = document.querySelector('.post__box');
const commentWrapp = document.querySelector('.comment__wrapp');
const btnComment = document.querySelector('.btn__comment');
const requesrURL = 'https://jsonplaceholder.typicode.com/';


const createPostContainer = (title, body) => {
    const postContainer = document.createElement('div');
    postContainer.innerHTML = `
            <h2> Title is - ${title}</h2>
            <p> Body is - ${body}</p>
        `;
    btnComment.classList.add('btn__comment-active');
    
    return postContainer;
}

const createPost = () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.querySelector('.id__input').value;
        box.innerHTML = '';
        commentWrapp.innerHTML = '';
        if(!input) return;
        fetch(`${requesrURL}posts/${input}`)
        .then(res => {
        if(res.status <= 400){
        return res.json();
        }
        return res.json().then(err => {
            const e = new Error('Something wrong');
            e.data = err;
            const error = document.createElement('div');
            error.innerHTML = `
            <h2> error - number must be from 1 to 100</h2>
            `;
        btnComment.classList.remove('btn__comment-active');
        box.appendChild(error);
            throw e;
        });
        })
        .then(post => {
            const postDiv = createPostContainer(post.title, post.body);
            box.appendChild(postDiv);
        })
        .catch(err => {
            console.error(err);
        });
    });
}

createPost();

const createCommentsContainer = (name, body) => {
    const commentBox = document.createElement('div');
    commentBox.innerHTML = `
        <h2> Comment: ${name}</h2>
        <p> Comment body:  ${body}</p>
    `;

    return commentBox;
}

const createComments = () => {
    btnComment.addEventListener('click', () => {
        const input = document.querySelector('.id__input').value;
        commentWrapp.innerHTML = '';
        fetch(`${requesrURL}posts/${input}/comments`)
        .then(res => {
        return res.json();
        })
        .then(comments => {
            comments.forEach((comment) => {
            const commentBox = createCommentsContainer(comment.name, comment.body);
            commentWrapp.appendChild(commentBox);
            })
        })
        .catch(err => {
            console.error(err);
        });
    });
}


createComments();






















// const form = document.querySelector('.form');
// const box = document.querySelector('.post__box');
// const commentWrapp = document.querySelector('.comment__wrapp');
// const requesrURL = 'https://jsonplaceholder.typicode.com/';

// function createPost(url) {
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const input = document.querySelector('.id__input').value;
//         box.innerHTML = '';
//         commentWrapp.innerHTML = '';
//         if(!input) return;
//         fetch(`${url}posts/${input}`)
//         .then(res => {
//         if(res.status < 400){
//         return res.json();
//         }
//         return res.json().then( err => {
//             const e = new Error('Something wrong');
//             e.data = err;
//             const error = document.createElement('div');
//             error.innerHTML = `
//             <h2> error - number must be from 1 to 100</h2>
//             `;
//         box.appendChild(error);
//             throw e;
//         });
//         })
//         .then(post => {
//         const postDiv = document.createElement('div');
//         postDiv.innerHTML = `
//             <h2> Title is - ${post.title}</h2>
//             <p> Body is - ${post.body}</p>
//         `;
//         box.appendChild(postDiv);
//         const btnComment = document.createElement('button');
//         btnComment.innerHTML = 'Show the comments';
//         box.appendChild(btnComment);
//         btnComment.addEventListener('click', () => {
//             commentWrapp.innerHTML = '';
//             fetch(`${url}posts/${input}/comments`)
//             .then(res => {
//             return res.json();
//             })
//             .then(comments => {
//             for(let el of comments) {
//             const commentBox = document.createElement('div');
//             commentBox.innerHTML = `
//                 <h2> Comment: ${el.name}</h2>
//                 <p> Comment body:  ${el.body}</p>
//             `;
//             commentWrapp.appendChild(commentBox);
//             }
//             })
//             .catch(err => {
//                 console.error(err);
//             });
//         });
//         })
//         .catch(err => {
//             console.error(err);
//         });
//     });
// }

// createPost(requesrURL);


