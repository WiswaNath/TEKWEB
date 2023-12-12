<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\iben;
use Illuminate\Support\Facades\Validator;

class bensin extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = iben::get();
        return response()->json([
            'status' => true,
            'message' => 'Data ditemukan',
            'data' => $data
        ],200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $book = new iben;

        $rules = [
            'nama' => 'required', 
            'jenis' => 'required',
            'harga' => 'required',
            'status' => 'required',

           
        ];

        $validator = Validator::make($request->all(), $rules);
        if($validator->fails()){
            return response()->json([
                'status' => false,
                'message' => 'Cannot adding the Data',
                'data' => $validator->errors()
                
            ]);
        }

        $book->nama = $request->nama;
        $book->jenis = $request->jenis;
        $book->harga = $request->harga;
        $book->status = $request->status;
        
        

        $post = $book->save();
        return response()->json([
            'status' => true,
            'message' => 'Sucess',
            
        ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = iben::find($id);
        if($data){
            return response()->json([
                'status' => true,
                'message' => 'Data found',
                'data' => $data
            ], 200);
        } 
        else{
            return response()->json([
                'status' => false,
                'message' => 'Data not found'
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $book = iben::find($id);

        if(empty($book)){
            return response()->json([
                'status' => false,
                'message' => 'Failed to update data',
                
            ], 404);
        }

        $rules = [
            'nama' => 'required', 
            'jenis' => 'required',
            'harga' => 'required',
            'status' => 'required',
        ];

        $validator = Validator::make($request->all(), $rules);
        if($validator->fails()){
            return response()->json([
                'status' => false,
                'message' => 'Sucess Update Data',
                'data' => $validator->errors()
                
            ]);
        }

        $book->nama = $request->nama;
        $book->jenis = $request->jenis;
        $book->harga = $request->harga;
        $book->status = $request->status;
        

        $post = $book->save();
        return response()->json([
            'status' => true,
            'message' => 'Sucess',
            
        ],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $book = iben::find($id);

        if(empty($book)){
            return response()->json([
                'status' => false,
                'message' => 'Failed to Delete Data',
                
            ], 404);
        
        }

        $post = $book->delete();

        return response()->json([
            'status' => true,
            'message' => 'Sucess Delete Data',
            
        ],200);
    }
}
