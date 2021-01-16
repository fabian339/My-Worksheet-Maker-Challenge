<template>
  <v-container>
    <v-row class="text-center" justify="center">
        <v-col cols="10" sm="6" md="5" lg="4">        
            <h2 class="headline font-weight-bold mb-3">Ready To Create a Worksheet?</h2>
            <form
                @submit="submit"
            >
                <v-text-field
                    label="Enter Word"
                    v-model="word"
                    name="email"
                    type="text"
                ></v-text-field>

                <v-text-field
                    v-if="word.length > 0"
                    v-model="definition"
                    label="Enter a definition"
                    name="definition"
                ></v-text-field>  

                <v-spacer></v-spacer>
                
                <v-btn type="submit" style="color: #ffffff" color="#00B36F">Add Word</v-btn>
            </form>
            <div v-if="questions.length > 0" style="margin: 20px">
                <h3>Your questions:</h3>
                    <v-row v-for="(question, i) in questions" :key="i">
                        <v-col>
                        {{question.word}}
                        </v-col>
                        <v-col>
                            {{question.definition}}
                        </v-col>
                    </v-row>
                    <v-btn type="submit" style="margin: 20px; color: #ffffff" color="#715DD6" @click.stop="printWorksheet">Print Worksheet</v-btn>
            </div>
      </v-col>
    </v-row>
  </v-container> 
</template>

<script>
import jsPDF from 'jspdf'

  export default {
  name: "Nav",

   data () {
      return {
        word: '',
        definition: '',
        questions: [],
      }
    },
     methods:{
        submit(e) {            
            e.preventDefault();
            this.questions.push({
                word: this.word,
                definition: this.definition
            })
            this.word = ''
            this.definition = ''
        },
        printWorksheet(e){
            e.preventDefault();
            // let pdfName = 'test'; 
                var doc = new jsPDF();
                this.questions.forEach(question => {
                    doc.text(question.word, 10, 10);
                    doc.text(question.definition, 10, 10);

                })
                doc.save("worksheet" + '.pdf');
        }
     }
  }

</script>