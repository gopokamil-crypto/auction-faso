# Douanes Mali Enchères - Configuration Supabase

## Étape 1: Créer un Projet Supabase

1. Allez sur [supabase.com](https://supabase.com)
2. Créez un compte gratuit ou connectez-vous
3. Cliquez sur "New Project"
4. Remplissez les informations:
   - **Name**: douanes-mali-encheres
   - **Database Password**: (choisissez un mot de passe fort)
   - **Region**: Choisissez la région la plus proche (Europe ou US)
5. Cliquez sur "Create new project" et attendez ~2 minutes

## Étape 2: Créer les Tables

1. Dans votre projet Supabase, allez dans **SQL Editor** (icône de base de données)
2. Cliquez sur "+ New query"
3. Copiez et collez le contenu du fichier `database/schema.sql`
4. Cliquez sur "Run" pour exécuter le script
5. Vérifiez que les tables `users` et `payment_settings` apparaissent dans **Table Editor**

## Étape 3: Configurer la Sécurité (RLS - Row Level Security)

### Pour permettre l'insertion publique dans `users`:

Dans SQL Editor, exécutez:

```sql
-- Activer RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_settings ENABLE ROW LEVEL SECURITY;

-- Permettre l'insertion publique dans users
CREATE POLICY "Allow public insert" ON users
  FOR INSERT TO anon
  WITH CHECK (true);

-- Permettre la lecture publique des payment_settings
CREATE POLICY "Allow public read" ON payment_settings
  FOR SELECT TO anon
  USING (true);

-- Permettre la mise à jour publique des payment_settings (pour l'admin)
-- NOTE: Dans un environnement de production, vous devriez sécuriser ceci avec l'authentification
CREATE POLICY "Allow public update" ON payment_settings
  FOR UPDATE TO anon
  USING (true)
  WITH CHECK (true);
```

## Étape 4: Obtenir les Clés API

1. Dans votre projet Supabase, allez dans **Settings** (icône d'engrenage)
2. Cliquez sur **API** dans le menu latéral
3. Vous verrez deux clés importantes:
   - **Project URL**: (exemple: https://xxxxx.supabase.co)
   - **anon public**: (une longue chaîne de caractères)

## Étape 5: Configurer le Projet

1. Ouvrez le fichier `js/supabase-config.js`
2. Remplacez les valeurs par vos vraies clés:

```javascript
const SUPABASE_URL = 'https://votre-projet.supabase.co';
const SUPABASE_ANON_KEY = 'votre-clé-publique-ici';
```

## Étape 6: Tester Localement

1. Vous pouvez maintenant tester avec un simple serveur HTTP:
   ```bash
   python3 -m http.server 3000
   ```

2. Ouvrez http://localhost:3000

3. Testez l'inscription sur `inscription.html`

4. Vérifiez dans Supabase **Table Editor** > **users** que l'utilisateur a été ajouté

5. Accédez à `admin.html` pour voir les utilisateurs et modifier les paramètres de paiement

## Étape 7: Déploiement

Vous pouvez déployer ce site statique sur:

- **Vercel**: Gratuit, très simple
  1. Créez un compte sur [vercel.com](https://vercel.com)
  2. Connectez votre repo GitHub
  3. Déployez
  
- **Netlify**: Gratuit également
  1. Créez un compte sur [netlify.com](https://netlify.com)
  2. Glissez-déposez votre dossier
  3. Déployez

- **GitHub Pages**: Gratuit
  1. Créez un repo GitHub
  2. Activez GitHub Pages dans Settings
  3. Votre site sera disponible à `username.github.io/repo-name`

## Notes Importantes

- ⚠️ **Sécurité Admin**: L'admin n'est actuellement pas protégé par mot de passe. Pour un environnement de production, vous devriez:
  1. Utiliser Supabase Auth
  2. Créer un utilisateur admin
  3. Protéger les routes admin avec l'authentification

- 🔒 **RLS Policies**: Les politiques créées permettent l'accès public. En production, vous devriez les sécuriser davantage.

- 💾 **Sauvegarde**: Supabase fait des sauvegardes automatiques, mais vous pouvez exporter vos données depuis le dashboard.

## Support

Si vous rencontrez des erreurs:
1. Vérifiez la console du navigateur (F12)
2. Vérifiez que les clés API sont correctes
3. Vérifiez que les tables existent dans Supabase
4. Vérifiez que les politiques RLS sont actives
