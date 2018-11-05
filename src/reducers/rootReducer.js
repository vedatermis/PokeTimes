const initState = {
    posts: [
        {id: '1', title: "Lorem ipsum dolor sit amet", body: "consectetur adipiscing elit. Fusce facilisis lacinia sodales. Nunc orci odio, egestas ut felis non, faucibus maximus lectus. Suspendisse dignissim vulputate lectus a tempor. Nullam fermentum et tortor vestibulum iaculis. Vivamus ornare odio pretium justo ultrices, ut dignissim lorem mattis. Nullam nec quam gravida, ullamcorper leo non, ornare libero. Curabitur id eros ullamcorper, mattis orci quis, pellentesque ex."},
        {id: '2', title: "Suspendisse potenti.", body: "Integer euismod quis nunc vitae cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris feugiat ex eu blandit hendrerit. Phasellus facilisis lobortis lorem quis vehicula. Etiam bibendum id nisi sit amet ullamcorper. Suspendisse vitae consectetur nulla. Quisque auctor, lorem vitae elementum posuere, ante ex viverra nisi, sed consectetur ipsum ipsum at nibh. Nulla eu tortor magna."},
        {id: '3', title: "Integer rhoncus semper nibh", body: "non ultrices tortor gravida vel. Donec consectetur efficitur lacinia. Nullam non maximus lorem. Curabitur tincidunt velit enim, sed tristique erat feugiat at. Nulla venenatis pellentesque metus, et lacinia mi tincidunt quis. Sed elementum porta massa, pretium vehicula odio tincidunt eu. Cras lectus tortor, sollicitudin et mattis ac, tempus et arcu."}

    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === "DELETE_POST") {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });

        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;