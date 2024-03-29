<?php

namespace Database\Seeders;

use App\Models\Episode;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Models\User;

class EpisodeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create('en_US');

        for ($i = 0; $i < 1000; $i++) {
            $param = [
                'title' => $faker->text(15),
                'price' => 0,
                'user_id' => random_int(1, 100),
            ];
            Episode::create($param);
        }
    }
}
