<template>
  <div>
    <div id="about-container" class="ui raised very padded text container">
      <div class="ui horizontal divider">
      </div>
      <a name="about"></a>
      <div class="ui one column grid">
        <div class="column">
          <div class="ui fluid card">
            <div>
              <img class="ui small centered circular bordered image" src="/static/ava.svg">
            </div>
            <h2 class="ui centered header">{{cv.name}}</h2>
            <h3 class="ui centered header">{{cv.heading}}</h3>
            <p>{{cv.description}}</p>
          </div>
        </div>
      </div>
      <div class="ui horizontal divider">
        <i class="icon users"></i> Work Experience
      </div>
      <div class="ui one column grid">
        <div class="column">
          <div class="ui fluid card">
            <div class="content">
              <img class="right floated small ui image"
                   src="/static/axibase_logo.png">
              <div class="header">
                Junior Developer
              </div>
              <div class="meta">
                Development integration apps, testing, support of Time Series Distributed
                Database
              </div>
            </div>
            <div class="content">
              <h4 class="ui header">Responsibilities</h4>
              <div class="description">
                <div class="ui middle bulleted aligned list">
                  <div class="item">
                    <div class="right floated content">
                      <div class="ui label">Java</div>
                    </div>
                    Functional tests development
                  </div>

                  <div class="item">
                    <div class="right floated content">
                      <div class="ui label">Java</div>
                      <div class="ui label">Bash</div>
                      <div class="ui label">Docker</div>
                    </div>
                    System and testing utils development
                  </div>
                  <div class="item">
                    <div class="right floated content">
                      <div class="ui label">Javascript</div>
                    </div>
                    Web applications development
                  </div>
                  <div class="item">
                    <div class="right floated content">
                      <div class="ui label">Java</div>
                      <div class="ui label">NodeJS</div>
                    </div>
                    Development API client based on HTTP API
                  </div>
                  <div class="item">
                    <div class="right floated content">
                      <div class="ui label">Markdown</div>
                    </div>
                    Writing documentation
                  </div>
                  <div class="item">
                    Support and operations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Education-->
      <div class="ui horizontal divider">
        <i class="icon student"></i> Education
      </div>
      <div class="ui one column grid">
        <div class="column">
          <div class="ui fluid card">
            <div class="content">
              <img class="right floated mini ui image"
                   src="/static/gerb.png">
              <div class="header">
                Saint Petersburg State University
              </div>
              <div class="meta">
                Bachelor<br>
              </div>
              <div class="description">
                Mathematics and Mechanics Faculty,department of Computer Science
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {db} from '../firebase'

  export default {
    name: 'cv-view',
    firebase: () => {
      return {
        cv: {
          source: db.ref('cv'),
          // optionally bind as an object
          asObject: true,
          // optionally provide the cancelCallback
          cancelCallback: function () {
          },
          // this is called once the data has been retrieved from firebase
          readyCallback: function () {
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
