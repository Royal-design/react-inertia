<?php

namespace App\Http\Controllers;

use App\Models\Post;

use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::latest()->paginate(5);
        return inertia('Home', compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
         return inertia('Create');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate(
            ['body'=>'required | min:5',
            'title'=> 'required | min:5'
            ]
        );
        Post::create($fields);
    return redirect('/')->with('success', 'New Post created! ✔️ ');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return inertia('Show', ['post'=>$post]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        return inertia('Edit', ['post'=>$post]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $fields = $request->validate(
            ['body'=>'required | min:5',
            'title'=> 'required | min:5'
            ]
        );
        $post->update($fields);
        return redirect(to: '/')->with('success', 'Post successfully updated! ✔️ ');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return redirect('/')->with('success', 'Post successfully deleted! ✔️ ');

    }
}