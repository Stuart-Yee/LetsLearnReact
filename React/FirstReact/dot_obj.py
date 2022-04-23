action = {
			"name": "Quarterstaff",
			"desc": "Melee Weapon Attack: +2 to hit (+4 to hit with shillelagh), reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage, or 6 (1d8 + 2) bludgeoning damage with shillelagh or if wielded with two hands.",
			"attack_bonus": 2,
			"damage": [
				{
					"choose": 1,
					"type": "damage",
					"fromm": [
						{
							"damage_type": {
								"index": "bludgeoning",
								"name": "Bludgeoning",
								"url": "/api/damage-types/bludgeoning"
							},
							"damage_dice": "1d6"
						},
						{
							"damage_type": {
								"index": "bludgeoning",
								"name": "Bludgeoning",
								"url": "/api/damage-types/bludgeoning"
							},
							"damage_dice": "1d8+2"
						}
					]
				}
			]
		}

class dot_object():
    def __init__(self, dict_obj):
        for key, value in dict_obj.items():
            self.__setattr__(key, value)
            if type(value) == dict:
                self.key = dot_object(value)
            if type(value) == list:
                for i in range(len(value)):
                    if type(value[i]) == dict:
                        value[i] = dot_object(value[i])
                        
            

new_obj = dot_object(action)
print(new_obj.damage[0].choose)
print(new_obj.damage[0].fromm[1].damage_dice)

