<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTodoRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
		'text' => ['sometimes', 'string'],
		'title' => ['sometimes', 'string'],
		'id' => ['required', 'exists:todos,id'],
		'is_completed' => ['sometimes', 'boolean'],
        ];
    }
}
