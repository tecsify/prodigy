from flask import Flask, request, make_response
from weasyprint import HTML, CSS
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

css = """
p {
  @apply leading-relaxed;
}

.cv {
  @apply flex text-gray-800 shadow-lg text-sm font-normal mt-6;
  width: 21cm;
  height: 29.69cm;
  min-width: 21cm;
  min-height: 29.69cm;
  max-width: 21cm;
  max-height: 29.69cm;
  align-self: flex-start;
  word-break: break-word;
  transform: scale(0.4);
  transform-origin: top;
  overflow-y: hidden;

  @media screen and (min-width: 425px) {
    transform: scale(0.65);
  }

  @media screen and (min-width: 768px) {
    transform: scale(0.9);
  }

  @media screen and (min-width: 1024px) {
    transform: scale(0.7);
  }

  &__side {
    @apply px-6 py-10 bg-gray-100 bg-opacity-100;
  }

  &__job-photo {
    border-radius: 100%;
    max-height: 13rem;
    border: 0.2rem white solid;
  }

  &__name {
    @apply text-3xl uppercase font-bold leading-8 mb-3 tracking-wide;
    color: #fff;
  }

  &__job-title {
    @apply text-xl uppercase;
  }

  &__section {
    @apply mt-6;

    &--main {
      @apply mt-0 text-sm;
    }
  }



  &__color-selected {
    background-color: var(--primary) !important;
    color: #fff !important;
  }

  &__section-title {
    @apply text-lg uppercase mb-2 font-bold tracking-wide;

    &--sm {
      @apply text-sm;
    }

    &--main {
      color: var(--primary);
    }
  }

  &__icon-wrapper {
    @apply flex flex-row font-light;
    align-items: center;

    &+& {
      margin-top: 5px;
    }
  }

  &__icon {
    @apply flex mr-1 fill-current rounded;
    width: 1.25rem;
    height: 1.25rem;
    min-width: 1.25rem;
    align-items: center;
  }

  &__tags {
    @apply flex flex-wrap;
  }

  &__tag {
    @apply px-2 py-1 rounded text-white text-xs;
    margin: 0.5rem 0.2rem 0.25rem;
    background-color: #fff;
    font-weight: 600 !important;
    color: var(--primary) !important;
  }

  &__list {
    @apply font-light mt-1;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding-left: 1em;
      text-indent: -1em;
    }

    li:first-child {
      @apply mt-1;
    }

    li::before {
      content: '\2022';
      padding-right: 0.2em;
      color: var(--primary);
    }
  }

  &__bar {
    border-color: var(--primary) !important;
    list-style: none;
    padding: 0;
    margin: 0;
    --border-opacity: 0 !important;

    li {
      @apply flex flex-col;
    }

    li+li {
      @apply mt-3;
    }
  }

  &__bar-level {
    @apply rounded-full mr-2;
    position: relative;
    height: 0.5rem;

    &--in {
      position: absolute;
      display: inline-block;
      background-color: #fff;
    }
  }

  &__main {
    @apply px-8 py-10;
  }

  &__event {
    &-elem+&-elem {
      @apply mt-6;
    }
  }

  &__bar {
    @apply my-5 border-gray-100 border-2;
  }
}

.blur {
  filter: blur(5px);
}
"""

@app.route('/generate_pdf', methods=['POST'])
def generate_pdf():
    try:
        # Obtén la plantilla HTML desde el cuerpo de la solicitud
        html_template = request.json.get('html_template')
        print(html_template)
        cssS = CSS(string=css)

        # Genera el PDF desde la plantilla HTML utilizando weasyprint
        pdf = HTML(string=html_template).write_pdf("cv.pdf", stylesheets=[cssS])
        
        # Configura la respuesta con el PDF generado
        response = make_response(pdf)
        response.headers['Content-Type'] = 'application/pdf'
        response.headers['Content-Disposition'] = 'inline; filename=cv.pdf'

        return pdf
    except Exception as e:
        print("Error en la generación del PDF:", e)
        return "Error en la generación del PDF", 500


if __name__ == '__main__':
    app.run(debug=True)
