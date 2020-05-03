import React, { Component } from 'react'

export default class Postform extends Component {
    constructor(props){
        super(props);
        this.state= {
            title: "enter your titel",
            body: "enter your body"
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChange(e){
        this.setState({ [e.target.name] : e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body :JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => console.log(data));
        

    }

    render() {
        return (
            <div>
                <h1> Add your post</h1>

                <form onSubmit = {this.onSubmit}>
                    <div>
                        <label>Title:</label>
                        <input type = "text" name = "title" value = {this.state.title} onChange = {this.onChange} />

                    </div>

                    <br/>

                    <div>
                        <label> Body: </label>
                        <input type = "text" name = "body" value = {this.state.body} onChange = {this.onChange} />
                    </div>

                    <button type="submit">Submit</button>



                </form>

            </div>
        )
    }
}