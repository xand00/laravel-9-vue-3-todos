<?php

namespace App\Observers;

use App\Models\Todo;
use App\Events\TodosChanged;

class TodoObserver
{
    /**
     * Handle the Todo "created" event.
     *
     * @param  \App\Models\Todo  $todo
     * @return void
     */
    public function created(Todo $todo)
    {
	    TodosChanged::dispatch();
    }

    /**
     * Handle the Todo "updated" event.
     *
     * @param  \App\Models\Todo  $todo
     * @return void
     */
    public function updated(Todo $todo)
    {
	    TodosChanged::dispatch();
    }

    /**
     * Handle the Todo "deleted" event.
     *
     * @param  \App\Models\Todo  $todo
     * @return void
     */
    public function deleted(Todo $todo)
    {
	    TodosChanged::dispatch();
    }

    /**
     * Handle the Todo "restored" event.
     *
     * @param  \App\Models\Todo  $todo
     * @return void
     */
    public function restored(Todo $todo)
    {
	    TodosChanged::dispatch();
    }

    /**
     * Handle the Todo "force deleted" event.
     *
     * @param  \App\Models\Todo  $todo
     * @return void
     */
    public function forceDeleted(Todo $todo)
    {
	    TodosChanged::dispatch();
    }
}
