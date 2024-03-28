from flask import Flask, request, jsonify
from flask_cors import CORS
from google.cloud import translate_v2 as translate
import os
import html

host = "/backend"
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "prodigy.json"
app = Flask(__name__)
CORS(app, resources={r"/backend/*": {"origins": "*"}})
translate_client = translate.Client("AIzaSyD5iqqW3jM486qMCQX5ViGtRXpwsq4Wack")

# Lista de campos que no se deben traducir
no_translate_fields = [
    "phoneNumber",
    "lengua",
    "location",
    "email",
    "lastName",
    "displayEducation",
    "displayProjects",
    "website",
    "jobSkills",
    "photo",
    "name",
    "linkedin",
    "twitter",
    "github",
    "activeColor",
    "lengua",
    "source_lenguage",
    "nameFontSize"
      "photoStyle",
  "photoBorder",
  "photoBnW"
]

@app.route(host + "/traducir", methods=["POST"])
def translate_json_from_cv():
    data = request.get_json()
    if not all([data.get("lengua"), data.get("source_lenguage")]):
        return jsonify({"error": "No se especificó el lenguaje"}), 400
    
    if data.get("source_lenguage") == data.get("lengua"):
        return data, 200

    source_language = data["source_lenguage"]
    target_language = data["lengua"]
    print(source_language, target_language)
    texts_to_translate = list(set())
    # Recopila todos los textos que necesitan ser traducidos
    for key, value in data.items():
        if key not in no_translate_fields:
            if isinstance(value, list):
                for item in value:
                    if isinstance(item, dict) and "summary" in item and "title" in item:
                        texts_to_translate.append(item["summary"])
                        texts_to_translate.append(item["title"])
                    elif key == "softSkills":
                        texts_to_translate.append(item)
                    elif key == "languages":
                        texts_to_translate.append(item["lang"])
                    else:
                        texts_to_translate.append(value)
            else:
                texts_to_translate.append(value)

    # Realiza una sola solicitud de traducción
    translate_client = translate.Client()
    translations = translate_client.translate(
        texts_to_translate,
        source_language=source_language,
        target_language=target_language,
    )

    translated_texts = {}
    # Construye un diccionario de texto original a texto traducido
    for original_text, translation in zip(texts_to_translate, translations):
        translated_texts[original_text] = html.unescape(translation["translatedText"])



    translated_data = {}
    for key, value in data.items():
        if key in no_translate_fields:
            translated_data[key] = value
        elif isinstance(value, list):
            translated_data[key] = []
            for item in value:
                if isinstance(item, dict) and "summary" in item and "title" in item:
                    item_copy = item.copy()
                    item_copy["summary"] = translated_texts[item["summary"]]
                    item_copy["title"] = translated_texts[item["title"]]
                    translated_data[key].append(item_copy)
                elif key == "softSkills":
                    translated_data[key].append(translated_texts[item].capitalize())
                elif key == "languages":
                    item_copy = item.copy()
                    item_copy["lang"] = translated_texts[item["lang"]].capitalize()
                    translated_data[key].append(item_copy)
                else:
                    translated_data[key].append(item)
        else:
            translated_data[key] = translated_texts[value]

    # Elimina las claves de lenguaje de los datos traducidos
    translated_data.pop("lengua", None)
    translated_data.pop("source_lenguage", None)
    return jsonify(translated_data), 200


""" 
    except Exception as e:
        return jsonify({'error': str(e)}), 500 """



if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=5100)