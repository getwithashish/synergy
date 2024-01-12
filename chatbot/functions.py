import json
import os

def create_assistant(client):
  assistant_file_path = 'assistant.json'

  if os.path.exists(assistant_file_path):
    with open(assistant_file_path, 'r') as file:
      assistant_data = json.load(file)
      assistant_id = assistant_data['assistant_id']
      print("Loaded existing assistant ID.")
  else:
    file = client.files.create(file=open("knowledge.docx", "rb"),purpose='assistants')

    print("file id is ",file.id)
    assistant=client.beta.assistants.create(instructions="""
          The assistant, IRCTC Assistant, has been programmed to help Travellers with details related to the train and journey.
          A document has been provided with information on IRCTC train details.
          """,model="gpt-3.5-turbo-1106",
              tools=[{"type": "retrieval"}],
              file_ids=[file.id])

    with open(assistant_file_path, 'w') as file:
      json.dump({'assistant_id': assistant.id}, file)
      print("Created a new assistant and saved the ID.")

    assistant_id = assistant.id

  return assistant_id
