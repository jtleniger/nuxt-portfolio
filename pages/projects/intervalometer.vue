<template>
    <div>
        <section class="hero is-dark is-medium">
            <div class="hero-body">
                <div class="container">
                <div class="column">
                    <h1 class="title is-size-2-mobile has-text-weight-bold has-text-right-mobile">
                    Raspberry Pi Intervalometer
                    </h1>
                </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="tile is-ancestor">
                    <div class="tile is-parent">
                        <div class="tile is-child box">
                            <p class="has-text-grey">
                                <em>This project's source code is available on <a href="https://github.com/jtleniger/rpi-timelapse-ui" target="_blank">GitHub.</a></em>
                            </p>
                            <p class="margin-top">
                                I enjoy photography, and a new interest has been astrophotography.
                                Generally, it involves taking a series of many photographs, then stacking them in post processing to remove noise introduced when shooting long exposures at high ISOs at night.
                                Unfortunately for me, I own the Nikon D3400 DSLR. This model doesn't have any input for an intervalometer (a device which connects to the camera and triggers a set count of exposures remotely).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<style lang="scss" scoped>
  .hero {
    background: url('~assets/images/pi.jpg')center center; background-size:cover;
  }
</style>