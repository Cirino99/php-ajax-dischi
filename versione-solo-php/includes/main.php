<main>
    <section>
        <div class="d-flex flex-wrap">
            <?php
            foreach ($arr_dischi as $song) { ?>
                <div class="card-song text-center">
                    <img src="<?= $song['poster'] ?>" alt="<?= $song['title'] ?>">
                    <h3><?= $song['title'] ?></h3>
                    <span><?= $song['author'] ?><br><?= $song['year'] ?></span>
                </div>
            <?php } ?>
        </div>
    </section>
</main>