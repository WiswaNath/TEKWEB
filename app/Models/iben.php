<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class iben extends Model
{
    use HasFactory;

    protected $table = "tb_iben";
    protected $primaryKey = 'id_produk';
    protected $fillable = [
        'nama',
        'jenis',
        'harga',
        'status',
    ];
}
