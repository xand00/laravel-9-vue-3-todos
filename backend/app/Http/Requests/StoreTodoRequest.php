<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTodoRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
           'text' => ['required', 'string'],
           'title' => ['required', 'string'],
           'is_completed' => ['sometimes', 'boolean'],
        ];
    }
}
