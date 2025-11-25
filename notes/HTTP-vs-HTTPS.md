# 🌐 HTTP vs. HTTPS – Vergleich & Funktionsweise

## 1️⃣ Überblick
HTTP (Hypertext Transfer Protocol) und HTTPS (HTTP Secure) sind Protokolle der Anwendungsschicht (OSI Layer 7).  
Der wichtigste Unterschied:

> 🔐 **HTTPS = HTTP + TLS-Verschlüsselung**  
> HTTP ist unverschlüsselt, HTTPS ist verschlüsselt und authentifiziert.

---

## 2️⃣ HTTP – Eigenschaften

| Merkmal | Beschreibung |
|---------|--------------|
| 🔓 **Unverschlüsselt** | Daten werden im Klartext übertragen |
| 📡 **Port 80 (TCP)** | Standardport |
| 🚫 **Keine Authentifizierung** | Browser kann Serveridentität nicht prüfen |
| ⚠️ **Unsicher** | Anfällig für MITM, Sniffing, Session Hijacking |

➡ Nicht geeignet für Passwörter, Logins oder persönliche Daten.

---

## 3️⃣ HTTPS – Eigenschaften

| Merkmal | Beschreibung |
|---------|--------------|
| 🔐 **TLS-Verschlüsselung** | Schutz vor Mithören |
| 🛡️ **Authentifizierung** | Zertifikat beweist Echtheit der Domain |
| 🔏 **Integrität** | Schutz vor Datenmanipulation |
| 🔢 **Port 443 (TCP)** | Standardport |
| 📜 **X.509 Zertifikate** | CA-signiert |

➡ HTTPS ist heute Standard für alle Websites.

---

## 4️⃣ Warum HTTP unsicher ist

- Passwörter können im WLAN abgefangen werden  
- MITM-Angriffe möglich  
- Sitzungs-Cookies können gestohlen werden  
- Inhalte können unterwegs verändert werden

---

## 5️⃣ Wie HTTPS funktioniert

HTTPS nutzt **TLS** zwischen HTTP und TCP.

### 🔐 TLS bietet:
1. **Verschlüsselung**
2. **Authentifizierung über CA-Zertifikate**
3. **Integritätsschutz**

### 🔧 Vereinfacht dargestellter Ablauf:
```
Client ----- TLS Handshake -----> Server
        <---- Zertifikat ----------
        <---- Session Key ----------
---------------- Verschlüsselte Verbindung ---------------
          HTTP über TLS → HTTPS
```

---

## 6️⃣ HTTP vs. HTTPS – Direkter Vergleich

| Thema | HTTP | HTTPS |
|-------|-------|--------|
| Verschlüsselung | ❌ Nein | ✔ Ja (TLS) |
| Port | 80 | 443 |
| Authentifizierung | ❌ Keine | ✔ CA-Zertifikat |
| Integrität | ❌ Keine | ✔ Ja |
| Sicherheit | ⚠️ Unsicher | 🔐 Sicher |
| SEO | Schlechter | Besser |
| Browser | „Nicht sicher“ | Grünes Schloss |

---

## 7️⃣ Verhältnis zum OSI-Modell

| OSI-Schicht | HTTP | HTTPS |
|-------------|------|--------|
| Layer 7 | HTTP | HTTP |
| Layer 6 | – | **TLS** |
| Layer 4 | TCP 80 | TCP 443 |

➡ TLS sitzt *zwischen* Anwendung und Transport → „Layer 4.5“.

---

## 8️⃣ Rolle der Zertifikate

HTTPS nutzt ein **X.509-Zertifikat**, um die Identität des Servers zu bestätigen.

- verhindert Phishing  
- verhindert MITM  
- baut Vertrauen über CA (Certificate Authority) auf

---

## 9️⃣ Warum heute alles zu HTTPS wechselt

- Datenschutz & DSGVO  
- Browser markiert HTTP als „Nicht sicher“  
- Moderne Features (HTTP/2, HTTP/3) erfordern HTTPS  
- Kostenlose Zertifikate (Let’s Encrypt)

---

## 🔟 Zusammenfassung

| Punkt | HTTP | HTTPS |
|-------|-------|--------|
| Sicherheit | ❌ Nein | ✔ Ja |
| Verschlüsselung | ❌ Keine | ✔ TLS |
| Zertifikat | ❌ Nein | ✔ Ja |
| Empfehlung | Nicht mehr nutzen | Standard |

---

## 📘 Fazit
> **HTTPS schützt Vertraulichkeit, Integrität und Identität –  
> HTTP ist veraltet und unsicher.**
