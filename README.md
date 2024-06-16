# TYPESCRIPT OPENAI API TESTING

Use Typescript and Vite to interface with the OpenAI API.

## Quick Start

Tilt up Ubuntu Linux on an AWS 64-bit CISC EC2 Instance (t2.micro for example). Login via ssh and run the following commands in a bash script:

```
ssh-keygen
cat /home/ubuntu/.ssh/id_ed25519.pub
echo "copy the key and add it to the list of key with access to GitHub then press any key to continue..."
read -s -n 1
echo "Continuing..."
git clone git@github.com:infectiouscontentengineering/typescript-openai-api-testing.git
cd typescript-openai-api-testing/
bash scripts/setup.bash
```

When the vi dialog opens, enter the OPENAI_API_KEY. For example:

```OPENAI_API_KEY=tHi$!zMy)p3N@IpaSswUd```

<img width="493" alt="typescript-openai-api-dialog" src="https://github.com/infectiouscontentengineering/typescript-openai-api-testing/assets/172711211/550333b4-0dad-49ef-88aa-8bc028c1ce6d">
