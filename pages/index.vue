<template>
  <v-layout
    column
  >

    <v-flex
      xs12
    >
      <v-parallax
        :src="require('@/assets/panorama.jpg')"
        height="500"
      >
        <v-layout
          column
          align-center
          justify-center
        >
          <h1 class="mb-2 display-4 text-xs-center">Hello! I'm Justin.</h1>
          <div class="subheading mb-3 text-xs-center">I'm a software developer, and wannabe outdoorsman.</div>
        </v-layout>
      </v-parallax>
    </v-flex>

    <v-container>
      <v-layout
        column
        wrap
        align-center
        class="my-5"
      >
        <v-flex
          xs12
          sm4
          class="my-3"
        >
          <div class="text-xs-center">
            <h2 class="headline">The best way to start developing</h2>
            <span class="subheading">
              Cras facilisis mi vitae nunc 
            </span>
          </div>
        </v-flex>

        <v-flex
          xs12
        >
          <v-container
            grid-list-xl
          >
            <v-layout
              row
              wrap
              align-center
            >
              <v-flex
                xs12
                md4
              >
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon
                      x-large
                      class="blue--text text--lighten-2"
                    >
                      color_lens
                    </v-icon>
                  </v-card-text>
                  <v-card-title
                    primary-title
                    class="layout justify-center"
                  >
                    <div class="headline text-xs-center">Material Design</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex
                xs12
                md4
              >
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon
                      x-large
                      class="blue--text text--lighten-2"
                    >
                      flash_on
                    </v-icon>
                  </v-card-text>
                  <v-card-title
                    primary-title
                    class="layout justify-center"
                  >
                    <div class="headline">Fast development</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex
                xs12
                md4
              >
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon
                      x-large
                      class="blue--text text--lighten-2">build</v-icon>
                  </v-card-text>
                  <v-card-title
                    primary-title
                    class="layout justify-center"
                  >
                    <div class="headline text-xs-center">Completely Open Sourced</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>

        <v-flex
          xs12
          class="my-3"
        >
          <p class="text-cs-center">
            Cloud bread affogato +1 hammock photo booth tumblr. Plaid cred flexitarian succulents four dollar toast pok pok 3 wolf moon venmo edison bulb hot chicken kombucha air plant helvetica keytar godard. XOXO keytar hexagon edison bulb tumeric cold-pressed. La croix cred actually intelligentsia DIY copper mug green juice lumbersexual PBR&B vegan ennui letterpress heirloom tousled. Live-edge listicle tumblr echo park drinking vinegar forage truffaut. Vexillologist stumptown microdosing listicle actually gastropub, health goth tofu edison bulb farm-to-table tumblr flannel. Lyft yuccie mlkshk 3 wolf moon ennui.

            Polaroid trust fund scenester, fanny pack unicorn cliche semiotics vice small batch everyday carry. Bespoke photo booth activated charcoal pitchfork lomo, glossier gentrify crucifix butcher street art flexitarian hammock locavore plaid. Pabst unicorn church-key biodiesel scenester poke. Church-key pug lumbersexual bushwick pork belly, enamel pin viral beard four dollar toast raclette freegan hammock glossier art party. Cliche enamel pin tbh put a bird on it salvia.

            Quinoa 90's godard tofu polaroid whatever blog biodiesel YOLO taxidermy marfa vaporware keffiyeh XOXO heirloom. Hashtag vice hella thundercats, chia 90's brooklyn truffaut brunch pop-up yuccie. Tote bag chia vexillologist crucifix pork belly. Godard poutine biodiesel gluten-free selvage. Everyday carry live-edge church-key, marfa 90's bitters af scenester roof party yuccie vinyl unicorn salvia hella.

            Fashion axe butcher pork belly af occupy single-origin coffee. Williamsburg fam pinterest selvage dreamcatcher artisan green juice marfa stumptown activated charcoal brooklyn gochujang humblebrag tote bag godard. Chillwave put a bird on it synth kickstarter semiotics thundercats brunch migas lumbersexual taxidermy mustache next level poke prism. Mlkshk PBR&B selfies sriracha. Ugh mlkshk pabst ethical edison bulb.

            Gastropub snackwave tilde try-hard glossier. Hashtag intelligentsia locavore shoreditch tumeric woke farm-to-table aesthetic. Whatever iceland post-ironic, activated charcoal adaptogen mumblecore kombucha ennui 3 wolf moon hell of bicycle rights lo-fi lumbersexual retro disrupt. Skateboard cliche microdosing vinyl chambray tbh blog kogi single-origin coffee. Artisan neutra helvetica pug, everyday carry etsy post-ironic raclette enamel pin messenger bag chia.
          </p>
        </v-flex> 
      </v-layout>
    </v-container>

  </v-layout>
</template>

<style scoped>

</style>

